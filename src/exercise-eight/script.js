function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }

 /** 
  * Request a number, loop from 0 to that number printing if it's even or odd with the next structure:
  * 0 is even
  * 1 is odd
  * 2 is even
  * 3 is odd
  * ...
  * 
  * Solicita un número y realiza un bucle desde 0 hasta ese número, imprimiendo si el número es par o impar.
  * 
  * Objetivo
  * Queremos pedirle al usuario un número y luego imprimir si los números desde 0 hasta ese número son pares (even) o impares (odd).
  * 
  * Paso 1: Pedir el número al usuario
  * Vamos a usar el método prompt() para pedirle al usuario que ingrese un número. Este número será el límite hasta el cual vamos a contar.
  * 
  * Paso 2: Crear un bucle para contar desde 0 hasta el número que nos dio el usuario
  * Usaremos un bucle for para contar desde 0 hasta el número que el usuario ingresó.
  * 
  * Paso 3: Verificar si un número es par o impar
  * Para verificar si un número es par o impar, podemos usar el operador de módulo (%). Este operador nos da el resto de una división. Si el número se divide entre 2 sin dejar resto, es par; si deja un resto de 1, es impar.
  * 
  * Paso 4: Imprimir el resultado
  * Dentro del bucle, imprimiremos si cada número es par o impar.
   */

// Paso 1: Pedir un número al usuario
const number = prompt("Introduce un número para ver si es par o impar:");

// Convertir el valor que nos da el prompt en un número (porque por defecto es un texto)
const numberAsInt = parseInt(number);

// Paso 2: Usar un bucle para recorrer los números desde 0 hasta el número dado por el usuario
for (let i = 0; i <= numberAsInt; i++) {
    // Paso 3: Verificar si el número es par o impar
    if (i % 2 === 0) {
        // Si el resto de dividir por 2 es 0, es par
        console.log(i + " es par");
        render(`<p class="result result_par">es par ${i}</p>`); // Mostrar en la página que es par
    } else {
        // Si el resto de dividir por 2 es 1, es impar
        console.log(i + " es impar");
        render(`<p class="result result_impar">es impar ${i}</p>`); // Mostrar en la página que es impar
    }
}
