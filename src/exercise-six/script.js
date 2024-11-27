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
   */
