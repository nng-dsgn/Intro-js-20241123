function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }

 /** 
  * Request a number, representing the height of the triangle and print the following pattern using HTML. The triangle must start moving from left to right until the end of the viewport width.

      *
      **
      ***
      ****
      *****
      ****
      ***
      **
      *
    * To create the animation you can use @keyframes in CSS.
  * 
  * Solicita un número representando la altura de un triángulo y genera un patrón visual en HTML con asteriscos. El triángulo se mueve de izquierda a derecha según el ancho de la ventana.
  * 
  * Paso 1: Solicitar la altura:
    * Pedimos al usuario la altura del triángulo usando (prompt).
    * Convertimos la entrada a un número entero (parseInt) y validamos que sea positivo.
  * Paso 2: Construir el patrón del triángulo:
    * Usamos bucles (for) para construir primero la parte ascendente del triángulo y luego la descendente.
    * El patrón se construye usando \n para separar las filas y * para representar las estrellas.
  * Paso 3: Insertar el triángulo en HTML:
    * Creamos dinámicamente un contenedor <div> y añadimos el patrón en su contenido.
  * Paso 4: Aplicar la animación:
    * Utilizamos CSS con @keyframes para mover el triángulo de izquierda a derecha a lo largo del ancho de la ventana.
        * @keyframes mueve el triángulo de izquierda a derecha, y luego de vuelta, gracias a infinite alternate.
        * calc(100vw - 150px) asegura que el triángulo no salga del borde derecho.    
*/

// Paso 1: Solicitar la altura del triángulo al usuario
const altura = parseInt(prompt("Introduce la altura del triángulo:"));

// Validamos que el usuario haya ingresado un número válido
if (!isNaN(altura) && altura > 0) {
    // Paso 2: Crear el patrón del triángulo
    let patron = "";

    // Parte ascendente del triángulo
    for (let i = 1; i <= altura; i++) {
        patron += "*".repeat(i) + "\n";
    }

    // Parte descendente del triángulo
    for (let i = altura - 1; i >= 1; i--) {
        patron += "*".repeat(i) + "\n";
    }

    // Paso 3: Insertar el patrón en el HTML
    const contenedorTriangulo = document.getElementById("triangulo");
    contenedorTriangulo.textContent = patron; // Agregar el patrón al contenedor
} else {
    alert("Por favor, introduce un número válido y mayor a 0.");
    render(`<p class="result_error">Por favor, introduce un número válido y mayor a 0.</p>`);
}
