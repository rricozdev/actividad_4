export const obtenerMedia = nums =>
  nums.reduce((suma, n) => suma + n, 0) / nums.length;

export const obtenerMediana = nums => {
  const ordenados = [...nums].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
};

export const obtenerDesviacionEstandar = nums => {
  const media = obtenerMedia(nums);
  const varianza = nums.reduce((acc, n) => acc + Math.pow(n - media, 2), 0) / nums.length;
  return Math.sqrt(varianza);
};

export const obtenerEstadisticas = nums => ({
  media: obtenerMedia(nums),
  mediana: obtenerMediana(nums),
  desviacionEstandar: obtenerDesviacionEstandar(nums),
});