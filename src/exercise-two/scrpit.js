function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  *  Request a number of celsius degrees to the user and print the Farenheit degrees.
  * 
  * Objetivo: Obtener una temperatura en Celsius de un usuario y mostrar el equivalente en Fahrenheit.
  * Subtareas involucradas:
    * 1. Solicitar información (pedir los grados Celsius).
    * 2. Procesar la información (convertir de Celsius a Fahrenheit).
    * 3. Mostrar el resultado (Ver los grados Fahrenheit).
 */

const celsius = prompt("introduzca los grados Celsius"); //paso 1 pedir los grados celsius
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32; 
    } //paso 2: Definir la función para convertir Celsius a Fahrenheit
    
    const fahrenheit = celsiusToFahrenheit(celsius); // Convertir la temperatura

//paso 3 mostrar el resultado
console.log(`${celsius}°C son equivalentes a ${fahrenheit}°F.`);

// Renderizar el resultado 
 render(`
    <p>
        Temperatura en Celsius: ${celsius}°C
    </p>
    <p class="result__text">
        Equivalente en Fahrenheit: ${fahrenheit}°F
    </p>
`);


