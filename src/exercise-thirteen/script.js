function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



/** 
  * Request a string to the user representing the current time in format HH:mm:ss, ej: 14:33:25. Check if the structure is valid and create an object with the following structure:
  * 
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
*/
