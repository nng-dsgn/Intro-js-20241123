function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



/** 
  * Request a string to the user representing the current time in format HH:mm:ss, ej: 14:33:25. Check if the structure is valid and create an object with the following structure:
    * ```javascript
    * {
    *    hours: 14,
    *   minutes: 33,
    *   seconds: 25
    * }
    * ```
  * 
  * Print the object or the error message if the structure is not valid.
  * 
  * > [!NOTE]
  * > Check the [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) function of the string to separate the hours, minutes and seconds in an Array.
  * 
  * 
  * Solicitar al usuario que introduzca una cadena que represente la hora actual en el formato HH:mm:ss, por ejemplo, 14:33:25. Se debe validar si la estructura de la entrada es válida. Si lo es, se debe crear un objeto con las propiedades hours, minutes y seconds. Si no es válida, se mostrará un mensaje de error.
  * 
  * Paso 1. Solicitar al Usuario la Hora
    * Usar prompt (o una entrada equivalente) para pedir una cadena al usuario en formato HH:mm:ss.
  * Paso 2. Validar el Formato de Entrada
    * Comprobar que la entrada:
      * Contiene dos puntos (:) como separadores.
      * Contiene exactamente tres segmentos (horas, minutos, segundos).
      * Las horas están entre 0 y 23.
      * Los minutos y segundos están entre 0 y 59.
    * Puedes usar una expresión regular para facilitar esta validación.
  * Paso 3. Dividir la Cadena en Componentes
    * Utilizar la función split(':') para separar la cadena en un arreglo con tres elementos: horas, minutos y segundos.
  * Paso 4. Convertir las Cadenas a Números
    * Asegurarse de convertir cada parte de la cadena a un número entero con parseInt.
  * Paso 5. Crear el Objeto
    * Si la entrada es válida, crear un objeto con las propiedades hours, minutes y seconds basándose en los valores ingresados.
  * Paso 6. Mostrar el Resultado
    * Si la estructura es válida, imprimir el objeto en la consola o en la interfaz.
    * Si la estructura no es válida, imprimir un mensaje de error como: "Formato no válido. Use HH:mm:ss".
  * 
  * 
  * 
*/


// Paso 1. Solicitar la entrada del usuario
let timeInput = prompt("Introduce la hora en formato HH:mm:ss (ejemplo: 14:33:25):");

// Paso 2. Validar el formato de la entrada
function isValidTime(input) {
  const timeRegex = /^([0-1]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)$/; // Expresión regular para validar HH:mm:ss
  return timeRegex.test(input);
}

// Paso 3. Crear el objeto si la entrada es válida
if (isValidTime(timeInput)) {
  // Paso 3. Dividir la cadena y convertir a números
  let [hours, minutes, seconds] = timeInput.split(':').map(Number);

  // Paso 5. Crear el objeto
  const timeObject = {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };

  // Paso 6. Imprimir el objeto
  console.log("Objeto de tiempo:", timeObject);
  render(`<p">Objeto de tiempo: ${timeInput}</p>`);
} else {
  // Mensaje de error si la entrada no es válida
  console.error("Formato no válido. Por favor, use el formato HH:mm:ss");
  render(`<p class="error">Formato no válido. Por favor, use el formato HH:mm:ss</p>`);
}
