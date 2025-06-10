### 📄 INFORME DE REFACTORIZACIÓN

#### 📌 Descripción del problema

El código original, aunque funcional, presentaba varios problemas relacionados con la calidad y mantenibilidad:

* Código repetitivo en el cálculo de estadísticas.
* Uso innecesario de variables intermedias.
* Nombres poco descriptivos en algunos casos.
* Falta de separación de responsabilidades.
* Ausencia de pruebas de unidad.
* No estaba estructurado para reutilización o integración modular.

---

#### 🛠 Técnicas de refactorización aplicadas

1. **Extracción de funciones puras**

   * Se mejoró la legibilidad separando claramente `obtenerMedia`, `obtenerMediana` y `obtenerDesviacionEstandar`.

2. **Eliminación de código redundante**

   * Se eliminó la creación innecesaria de variables cuando se podía retornar directamente el resultado.

3. **Modularización**

   * El código se encapsuló en un archivo JS (`refactorizacion.fuente.js`) para su reutilización como módulo ES.

4. **Separación de estilos**

   * Se creó un archivo `style.css` para mantener separación entre lógica y presentación.

5. **Uso de buenas prácticas de nomenclatura**

   * Las funciones y variables tienen nombres que reflejan claramente su propósito.

---

#### 🔄 Comparación antes vs después

| Criterio                        | Antes                           | Después                           |
| ------------------------------- | ------------------------------- | --------------------------------- |
| Claridad                        | Media                           | Alta                              |
| Modularidad                     | Baja (todo junto en un archivo) | Alta (código separado en módulos) |
| Reutilización                   | Difícil                         | Fácil de importar y usar          |
| Mantenibilidad                  | Costosa                         | Mucho más simple                  |
| Separación de responsabilidades | No clara                        | Clara (HTML / CSS / JS separados) |

---

#### 🧪 Pruebas de unidad realizadas

Las funciones se probaron con el mismo conjunto de datos `[1,2,3,4,5,6,7,8,9,10]` y se obtuvieron los siguientes resultados esperados:

* Media: `5.5`
* Mediana: `5.5`
* Desviación estándar: `2.8722813232690143`

Se comparó la salida del código original con el refactorizado y ambos arrojaron los mismos resultados, lo cual confirma que **el comportamiento externo no se modificó**.

---

#### 🌐 Integración con frontend

* Se integró en una página HTML (`index.html`) con una interfaz sencilla.
* Se agregó un archivo de estilos (`styles.css`) con diseño visual agradable.
* Se usó ESModules para importar el script y mantener el código limpio y escalable.


