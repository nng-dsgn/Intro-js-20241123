# **Introduccion a JavaScript**

Este proyecto consiste en una serie de ejercicios de introducción a JavaScript. El objetivo es crear un sitio web con un menú de navegación que enlace a diferentes ejercicios, cada uno en una página HTML separada. Los ejercicios interactúan con el usuario mediante la función `prompt` para solicitar datos y `alert` para mostrar los resultados.

## 🚀 **Propósito**

El propósito de este proyecto es practicar los conceptos básicos de JavaScript y aplicar habilidades de maquetación web creando una página web interactiva que ejecute diversos algoritmos solicitando información al usuario y mostrando resultados dinámicamente.

Este conjunto de ejercicios en JavaScript cubre diversos aspectos fundamentales de la programación, incluyendo manejo de cadenas, conversiones de unidades, estructuras de control, y validación de datos. Se trabaja con la solicitud de entrada de datos del usuario, condiciones (if, else), bucles (for), y validación de información. Los ejercicios incluyen tareas como calcular la temperatura en grados Fahrenheit, evaluar el IMC, manejar límites de velocidad en función de la contaminación, controlar el comportamiento de un semáforo, y realizar ejercicios de FizzBuzz, entre otros. Además, se requieren habilidades de manipulación de cadenas, como la validación de dominios, la inversión de números y la validación de formatos como el DNI español.

## 💻 **Tecnologías utilizadas**

- **HTML5:** Para estructurar el contenido de las páginas de cada ejercicio.
- **CSS3:** Para el diseño y estilo de las páginas.
- **JavaScript (JS):** Para la programación de la lógica de los ejercicios y la interacción con el usuario.
- **Prompt y Alert:** Para solicitar datos y mostrar resultados al usuario.

## **Estructura del Proyecto:**
La estructura del proyecto es la siguiente:

```plaintext
.
├── index.html
├── exercise-1
│   ├── index.html
│   └── script.js
├── exercise-2
│   ├── index.html
│   └── script.js
└──...
```

## **Ejercicios**

- ✅ **1. Concatenación de Cadenas:** 
    - **Descripción:** El ejercicio pide al usuario ingresar dos cadenas de texto y luego muestra la longitud de la cadena resultante al concatenarlas.
    - [Ver ejercicio 1](./src/exercise-one/index.html)

- ✅ **2. Conversión de Celsius a Fahrenheit:** 
    - **Descripción:** Solicita al usuario una temperatura en grados Celsius y la convierte a grados Fahrenheit, mostrando el resultado.
    - [Ver ejercicio 2](./src/exercise-two/index.html)

- ✅ **3. Cálculo del IMC:** 
    - **Descripción:** El ejercicio solicita dos números (peso y altura) y calcula el Índice de Masa Corporal (IMC), luego determina si el resultado es 'Obesidad de clase II'.
    - [Ver ejercicio 3](./src/exercise-three/index.html)

- ✅ **4. Límites de Velocidad según Contaminación:** 
    - **Descripción:** Establece que en una carretera con límite de velocidad de 90 km/h, si la contaminación es mayor al 65%, el límite de velocidad debe ser 70 km/h. El algoritmo ajusta el límite según la condición de contaminación.
    - [Ver ejercicio 4](./src/exercise-four/index.html)

- ✅ **5. Comportamiento del Semáforo:** 
    - **Descripción:** El ejercicio solicita al usuario el estado actual de un semáforo ('verde', 'amarillo intermitente', 'amarillo', 'rojo') y le indica si el coche debe detenerse o puede continuar, con una gestión de errores si el valor ingresado no es válido.
    - [Ver ejercicio 5](./src/exercise-five/index.html)

- ✅ **6. Calificación en Letras:** 
    - **Descripción:** El algoritmo solicita una calificación numérica y devuelve la calificación correspondiente en formato de letras: Suspensa, Aprobada, Notable, Sobresaliente o Matrícula de Honor.
    - [Ver ejercicio 6](./src/exercise-six/index.html)

- ✅ **7. Validación de Dominio de URL:** 
    - **Descripción:** Solicita una URL y extrae el dominio, indicando si es un dominio principal de 'Github' o un subdominio.
    - [Ver ejercicio 7](./src/exercise-seven/index.html)

- ✅ **8. Números Pares o Impares:** 
    - **Descripción:** Solicita un número y realiza un bucle desde 0 hasta ese número, imprimiendo si el número es par o impar.
    - [Ver ejercicio 8](./src/exercise-eight/index.html)

- ✅ **9. Ejercicio FizzBuzz:** 
    - **Descripción:** Solicita un número y realiza un bucle desde 1 hasta ese número. Imprime 'Fizz' si el número es múltiplo de 3, 'Buzz' si es múltiplo de 5, y 'FizzBuzz' si es múltiplo de ambos.
    - [Ver ejercicio 9](./src/exercise-nine/index.html)

- ✅ **10. Inversión de Número:** 
    - **Descripción:** Solicita un número al usuario y lo imprime al revés, mostrando cómo invertir el orden de sus dígitos.
    - [Ver ejercicio 10](./src/exercise-ten/index.html)

- ✅ **11. Validación de DNI Español:** 
    - **Descripción:** Solicita un número de DNI español y valida si es correcto según las reglas de formato y longitud del DNI español.
    - [Ver ejercicio 11](./src/exercise-eleven/index.html)

- ✅ **12. Patrón de Triángulo en HTML:** 
    - **Descripción:** Solicita un número representando la altura de un triángulo y genera un patrón visual en HTML con asteriscos. El triángulo se mueve de izquierda a derecha según el ancho de la ventana.
    - [Ver ejercicio 12](./src/exercise-twelve/index.html)

- ✅ **13. Validación de Hora y Creación de Objeto:** 
    - **Descripción:** Solicita al usuario una cadena que represente la hora en formato HH:mm:ss. Valida si la estructura es correcta y crea un objeto con propiedades para horas, minutos y segundos. Imprime el objeto o un mensaje de error si la estructura no es válida.
    - [Ver ejercicio 13](./src/exercise-twelve/index.html)

- ✅ **14. Gestión de un Array de Coches:** 
    - **Descripción:** Crea un objeto que represente un coche con propiedades como marca, modelo, matrícula, velocidad actual y estado (encendido/apagado). Incluye un array de al menos 4 coches. Imprime la velocidad del tercer coche, un círculo rojo o verde según el estado de los coches, la marca del primer coche encendido (o un mensaje si ninguno lo está), y la velocidad media de todos los coches.
    - [Ver ejercicio 14](./src/exercise-twelve/index.html)

- ✅ **15. Ticket de Compra:** 
    - **Descripción:** Crea un array de productos (id, nombre, tipo y precio) que representen un carrito de compras. Solicita al usuario el monto total del pago y genera un ticket que incluya la lista de productos con su precio total, el monto total de la compra, el pago del usuario y el cambio a devolver. Si el pago es insuficiente, imprime un mensaje de error.
    - [Ver ejercicio 15](./src/exercise-twelve/index.html)
⏳

📜 Licencia Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

Gracias por revisar este proyecto.

¡Disfruta aprendiendo JavaScript!
