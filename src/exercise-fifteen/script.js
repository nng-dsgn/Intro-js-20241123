function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  * Create an array of `products` (id, nombre, tipo y precio), representing a shopping cart. Request the user to introduce the total payment amount and print the payment ticket. The ticket must contain the following information:
        *- The list of products with the total price of each product
        *- The total amount of the purchase
        *- The user's total payment
        *- The change to return to the user
    * If the user's payment is less than the total amount of the purchase, print an error message.
    * 
    * Paso 1: Crear un array de productos
    * Paso 2: Solicitar la cantidad de dinero de pago al usuario
    * Paso 3: Calcular el total de la compra
    * Paso 4: Generar el ticket
       * Imprimir lista de productos con precios
       * Calcular el cambio
       * Mostrar el ticket
    * 
   */

// Paso 1: Crear el array de productos
const products = [
  { id: 1, nombre: "Manzana", tipo: "Fruta", precio: 0.5 },
  { id: 2, nombre: "Leche", tipo: "Lácteo", precio: 1.2 },
  { id: 3, nombre: "Pan", tipo: "Grano", precio: 1.0 },
  { id: 4, nombre: "Huevos", tipo: "Proteína", precio: 2.5 }
];

// Paso 2: Solicitar la cantidad de dinero de pago al usuario
const userPayment = parseFloat(prompt("Introduce el monto de pago:"));

if (isNaN(userPayment) || userPayment <= 0) {
  console.error("El total ingresado no es válido.");
  render(`<p class="error">El total proporcionado es insuficiente para completar la compra.</p>`);
} else {
  // Paso 3: Calcular el total de la compra
  const totalAmount = products.reduce((sum, product) => sum + product.precio, 0);

  // Paso 4: Generar el ticket
  if (userPayment < totalAmount) {
    console.error("El total  proporcionado es insuficiente para completar la compra.");
  } else {
    const productList = products.map(product => `${product.nombre}: $${product.precio.toFixed(2)}`).join("\n");
    const change = userPayment - totalAmount;

    console.log("===== TICKET DE COMPRA =====");
    console.log(productList);
    console.log(`Total: $${totalAmount.toFixed(2)}`);
    console.log(`Pago del usuario: $${userPayment.toFixed(2)}`);
    console.log(`Cambio: $${change.toFixed(2)}`);
    render(`<p>===== TICKET DE COMPRA =====</p>
            <p>${productList}</p>
            <p>Total: ${totalAmount.toFixed(2)}</p>
            <p>Pago del usuario:${userPayment.toFixed(2)}</p>
            <p>Cambio: ${change.toFixed(2)}</p>
            `);
  }
}
