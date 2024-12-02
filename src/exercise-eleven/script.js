function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }

 /** 
  * Request a DNI to the user and prints if it is a valid spanish ID's. More info on Rules
  * 
  * Solicita un número de DNI español y valida si es correcto según las reglas de formato y longitud del DNI español.
  * 
  * Paso 1: Solicitar el DNI al usuario
     * Usamos prompt para pedir el número de DNI. Se guarda como texto porque debemos analizar su contenido.
  * Paso 2: Validar el formato
    * Utilizamos varias condiciones para validar el DNI:
           * Longitud exacta de 9 caracteres.
           * Los primeros 8 caracteres deben ser números.
           * El último carácter debe ser una letra.
  * Paso 3: Mostrar el resultado
     * Informamos al usuario si el DNI es válido o no.
  * Paso 4: Mostrar el resultado
     * Mostramos el número invertido al usuario mediante un mensaje en consola o una alerta.
     * Y posteriormente lo renderizamos para que se muestre.
*/

// Paso 1: Solicitar el DNI al usuario
const dni = prompt("Introduce tu DNI español (formato: 12345678A):");

// Paso 2: Función para validar el formato del DNI
function isValidDNI(dni) {
    // Verificar que tenga exactamente 9 caracteres
    if (dni.length !== 9) {
        return false;
    }

    // Extraer la parte numérica y la letra
    const numbers = dni.slice(0, 8); // Primeros 8 caracteres
    const letter = dni.slice(8).toUpperCase(); // Último carácter en mayúscula

    // Verificar que los primeros 8 caracteres sean números, Verificar que el último carácter sea una letra, Si pasa todas las validaciones, el DNI es válido
    return !isNaN(numbers) && /^[A-Z]$/.test(letter);
}

// Paso 3: Mostrar el resultado
if (isValidDNI(dni)) {
    alert(`El DNI ${dni} es válido.`);
    console.log(`El DNI ${dni} es válido.`);
    render(`<p class="result">El DNI ${dni} es válido.</p>`);
} else {
    alert(`El DNI ${dni} no es válido. Asegúrate de usar el formato correcto: 12345678A.`);
    console.log(`El DNI ${dni} no es válido.`);
    render(`<p class="result_error">El DNI ${dni} no es válido.</p>`);
}
