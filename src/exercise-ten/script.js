function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }

 /** 
  * Request a number to the user and print the reverse of that number (EJ: 3456 => 6543)
  * 
  * Solicita un número al usuario y lo imprime al revés, mostrando cómo invertir el orden de sus dígitos.
  * 
  * Paso 1: Solicitar un número al usuario.
  *     Usamos prompt para pedir un número. Este se guarda como un texto inicialmente porque prompt siempre devuelve un string.
  * Paso 2: Verificar si la entrada es válida
  *     Nos aseguramos de que el usuario haya introducido algo y que sea un número. Usamos isNaN para verificar que no contenga letras u otros caracteres no numéricos.
  * Paso 3: Convertir el número en una cadena (si no lo es ya) y luego invertirlo
  * Utilizamos métodos de manipulación de cadenas:
        * Convertimos el número en una cadena (si no lo es ya).
        * Lo dividimos en un array con .split('').
        * Invertimos el array con .reverse().
        * Lo volvemos a unir en una cadena con .join('').
  * Paso 4: Mostrar el resultado
  *     Mostramos el número invertido al usuario mediante un mensaje en consola o una alerta.
  *     Y posteriormente lo renderizamos para que se muestre.
*/

// Paso 1: Solicitar el número al usuario
const userInput = prompt("Introduce un número y te lo mostraré al revés:");

// Paso 2: Verificar si la entrada es válida
if (isNaN(userInput) || userInput === null || userInput.trim() === "") {
    alert("Por favor, introduce un número válido.");
    render(`<p class="result_error">Por favor, introduce un número válido.</p>`);
} else {
    // Paso 3: Invertir el número
    const reversedNumber = userInput.split("").reverse().join("");

    // Paso 4: Mostrar el resultado
    alert(`El número al revés es: ${reversedNumber}`);
    console.log(`El número al revés es: ${reversedNumber}`);
    // Mostrar el resultado con render
    render(`<p class="result">El número al revés es: ${reversedNumber}</p>`);
}
