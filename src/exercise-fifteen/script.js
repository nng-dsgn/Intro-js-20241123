function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  *Create an array of `products` (id, nombre, tipo y precio), representing a shopping cart. Request the user to introduce the total payment amount and print the payment ticket. The ticket must contain the following information:
        *- The list of products with the total price of each product
        *- The total amount of the purchase
        *- The user's total payment
        *- The change to return to the user
    *If the user's payment is less than the total amount of the purchase, print an error message.
   */
