function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  * Request a number representing a subject result, build an algorithm that prints your result in letters:

  * SUSPENSA (<5)
  * APROBADA(5-<7),
  * NOTABLE(7-<9),
  * SOBRESALIENTE(9-<10)
  * MATRICULA DE HONOR (10)
  * 
  * Solicite un número que represente un resultado temático, construya un algoritmo que imprima su resultado en letras:
  * 
  * SUSPENSA(<5)
  * APROBADO(5-<7)
  * NOTABLE(7-<9),
  * SOBRESALIENTE(9-<10)
  * MATRÍCULA DE HONOR(10)
  * 
  * 1. Definir los rangos válidos de calificaciones y sus correspondientes estados en letras
    * SUSPENSA(<5)
    * APROBADO(5-<7)
    * NOTABLE(7-<9),
    * SOBRESALIENTE(9-<10)
    * MATRÍCULA DE HONOR(10)
    * 
  * 2. Solicitar al usuario su calificación
  * 3. Verificar el estado de la calificación y determinar el resultado
  * 4. Mostrar el resultado
   */


// Paso 1: Definir los rangos válidos de calificaciones y sus correspondientes estados en letras
const qualifications = [
    { min: 0, max: 5, label: "SUSPENSA" },
    { min: 5, max: 7, label: "APROBADA" },
    { min: 7, max: 9, label: "NOTABLE" },
    { min: 9, max: 10, label: "SOBRESALIENTE" },
    { min: 10, max: 10.01, label: "MATRÍCULA DE HONOR" }
];

// Paso 2: Solicitar al usuario su calificación
const userGrade = prompt("Introduce tu calificación (0-10):");

// Paso 3: Verificar el estado de la calificación y determinar el resultado
let resultLabel = "Calificación no válida."; // Valor por defecto en caso de error

for (const state of qualifications) {
    if (userGrade >= state.min && userGrade < state.max) {
        resultLabel = state.label;
    }
}

// Paso 4: Mostrar el resultado
if (resultLabel == "Calificación no válida.") {
    console.log(`Tu calificación es: ${resultLabel}`);
    render(`<div class="grade"></div><p>Tu calificación es: ${resultLabel}</p>`);
} else {
    console.log(resultLabel);
    render(`<div class="grade grade_error"></div><p>${resultLabel}</p>`);
}
