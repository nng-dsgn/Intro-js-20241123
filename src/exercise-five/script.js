function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  * A traffic light can be 'green', 'flashing amber', 'amber' or 'red'. Build and algorithm that request the current traffic light and prints if a car must stop or can go on. If the user inputs a different value, print an error message.
  * PD: flashing amber you can go on
  * PD: amber you must stop 
  * 
  * Un semáforo puede ser 'verde', 'ámbar intermitente', 'ámbar' o 'rojo'. Construye un algoritmo que solicite el semáforo actual e imprima si un coche debe detenerse o puede continuar. Si el usuario introduce un valor diferente, imprime un mensaje de error.
  * PD: ámbar intermitente puede continuar
  * PD: ámbar, debe detenerse 
  * 
  * 1. Colores posibles del semáforo:
    * green: El coche puede avanzar.
    * flashing amber: El coche puede avanzar.
    * amber: El coche debe detenerse.
    * red: El coche debe detenerse.
  * 2. Entrada del usuario:
    *  Solicitar al usuario el estado actual del semáforo.
  * 3. Condiciones:
    * Si el semáforo está en green o flashing amber, imprimir: "You can go on."
    * Si el semáforo está en amber o red, imprimir: "You must stop."
    * Si el valor ingresado no es válido, imprimir: "Error: Invalid traffic light state."
   */

const trafficLightStates = ["green", "flashing amber", "amber", "red"]; // Paso 1: Definir los estados válidos del semáforo
const trafficLight = prompt ("Estado actual del semáforo (green, flashing amber, amber, red):"); // Paso 2: Solicitar al usuario el estado actual del semáforo

if (trafficLight === "green") {
    console.log("You can go on.");
    render (`<div class="light light_green"></div><p>You can go on.</p>`);
} else if ( trafficLight === "flashing amber") {
    console.log("You can go on.");
    render (`<div class="light light_flashing-amber"></div><p>You can go on.</p>`);
} else if (trafficLight === "amber" ) {
    console.log("You must stop.");
    render (`<div class="light light_amber"></div><p>You must stop.</p>`);
} else if (trafficLight === "red") {
    console.log("You must stop.");
    render (`<div class="light light_red"></div><p>You must stop.</p>`);
} else {
    console.log("Error: Invalid traffic light state.");
    render (`<div class="light light_error"></div><p>Error: Invalid traffic light state.</p>`);
}
// Paso 3: Verificar si el estado ingresado es válido y determinar la acción



/** // manera compacta de hacerlo
if (trafficLight === "green"| trafficLight === "flashing amber") {
    console.log("You can go on.");
    render (`<div class="light light__go"></div><p>You can go on.</p>`);
} else if (trafficLight === "amber" || trafficLight === "red") {
    console.log("You must stop.");
    render (`<div class="light light__stop"></div><p>You must stop.</p>`);
} else {
    console.log("Error: Invalid traffic light state.");
    render (`<div class="light light__error"></div><p>Error: Invalid traffic light state.</p>`);
}

*/