function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



/** 
 * A road has 90km/h speed limits. If the pollution is greater than 65% the speed limit must be 70km/h. Build an algorithm to print what is the road speed limits depending on the pollution.
 * 
 * Una carretera tiene un límite de velocidad de 90 km/h. Si la contaminación es superior al 65%, el límite de velocidad debe ser de 70 km/h. Construye un algoritmo que imprima cuál es el límite de velocidad de la carretera en función de la contaminación.
 * 
   * 1. Definir una variable para el límite de velocidad, iniciando en 90 km/h.
   * 2. Solicitar o recibir un valor para el nivel de contaminación.
   * 3. Evaluar si la contaminación es mayor que 65%:
   *    Si es verdadero -> cambiar el límite de velocidad a 70 km/h.
   *    Si es falso -> mantener el límite de velocidad en 90 km/h.
   * 4. Visualizar el límite de velocidad actual.
   */
  
const velocoidad = 90  // Declaramos la velocidad inicial como constante
let velocidad; // Declaramos la variable velocidad que puede cambiar
const contaminación = prompt("Introduzca el nivel de contaminación (%):"); // Paso 2: solicitar contaminación
if (contaminación > 65){
    velocidad = 70; // Asignamos un nuevo valor a velocidad
    console.log(`El límite de velocidad en la carretera es ${velocidad} km/h.`);
    render (`<span class="reduced-speed">El límite de velocidad en la carretera es ${velocidad} km/h.</span>`);
} else if (contaminación < 65) {
    velocidad = 90 
    console.log(`El límite de velocidad en la carretera es ${velocidad} km/h.`);
    render(`<span class="normal-speed">El límite de velocidad en la carretera es ${velocidad} km/h.</span>`);
}

