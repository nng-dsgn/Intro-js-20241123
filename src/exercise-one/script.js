function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }
  
  /**
   * 1. Solicito el primer string y lo guardo en una variable
   * 2. Solicito el segundo string y lo guardo en otra variable
   * 3. Concateno los dos strings y el resultado lo guardo en una variable
   * 4. Obtengo la longitud de ese string y lo guardo en una variable
   * 5. Pinto la variable de la longitud
   * 6. Verifico que la longitud sea par o impar
   *      - Si es par ==> renderizar un cuadrado de 50px x 50px yellow
   *      - Si es impar ==> renderizar un cuadrado de 50px x 50px blue
   */
  
  const firstStr = prompt("introduzca el primer string"); //paso 1
  const secondStr = prompt("introduzca el segundo string"); //paso 2
  const concatResult = firstStr + secondStr; // pase 3

