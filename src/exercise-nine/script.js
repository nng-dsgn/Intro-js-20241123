function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }

 /** 
  * FizzBuzz. Request a number and build an algorithm that loops over numbers from 1 to that number and prints:
  * 'Fizz' if the current number is multiple of 3
  * 'Buzz' if the current number is multiple of 5
  * 'FizzBuzz' if the current number is multiple of 3 and 5
  * 
  * Solicita un número y realiza un bucle desde 1 hasta ese número. Imprime 'Fizz' si el número es múltiplo de 3, 'Buzz' si es múltiplo de 5, y 'FizzBuzz' si es múltiplo de ambos.
  * 
  * Paso 1: Solicitar un número al usuario.
  * Paso 2: Recorrer los números desde 1 hasta el número solicitado.
  * Paso 3: Imprimir:
        * "Fizz" si el número es múltiplo de 3.
        * "Buzz" si el número es múltiplo de 5.
        * "FizzBuzz" si el número es múltiplo de 3 y 5.
  * Paso 4: El número mismo si no es múltiplo ni de 3 ni de 5.
   */

// Paso 1: Solicitar un número al usuario
const number = prompt("Introduce un número para FizzBuzz:");

// Paso 2: Convertir la entrada a un número entero
const numberAsInt = parseInt(number);

// Verificar si el número es válido
if (isNaN(numberAsInt)) {
    alert("Por favor, introduce un número válido.");
} else {
    // Paso 3: Bucle para recorrer los números desde 1 hasta el número ingresado
    for (let i = 1; i <= numberAsInt; i++) {
        // Paso 4: Verificar las condiciones para Fizz, Buzz, o FizzBuzz
        let result = ""; // Almacena el resultado de FizzBuzz para cada número

        if (i % 3 === 0 && i % 5 === 0) {
            // Si es múltiplo de 3 y de 5
            result = "FizzBuzz";
        } else if (i % 3 === 0) {
            // Si es múltiplo de 3
            result = "Fizz";
        } else if (i % 5 === 0) {
            // Si es múltiplo de 5
            result = "Buzz";
        } else {
            // Si no es múltiplo ni de 3 ni de 5, mostramos el número
            result = i;
        }

        // Mostrar el resultado con render
        render(`<p class="result">${result}</p>`);
    }
}
