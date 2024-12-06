function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  * Create an object that represents a car and has properies such us `brand`, `model`, `plate`, `currentSpeed` and other property that represents if the car is on or off.
  * 
    * - Create an array of cars with at least 4 cars
    * - Prints in a `p` the speed of the third car
    * - Prints in a `red` or `green` circle if there is any car on or off
    * - Prints in a `p` the brand of the first car that is on or `No car is on` otherwise
    * - Prints in a `p` the medium speed of all cars
    * 
    * Paso 1: Crear un objeto que representa un coche
    * Paso 2: Crear un arreglo de coches con al menos 4 coches
    * Paso 3: Imprimir en un p la velocidad del tercer coche
    * Paso 4: Imprimir en un círculo rojo o verde si hay algún coche encendido o apagado
    * Paso 5: Imprimir en un p la marca del primer coche encendido o un mensaje indicando que no hay coches encendidos
    * Paso 6: Imprimir en un p la velocidad media de todos los coches
    * 
   */

 /** Paso 1. Crear un objeto que representa un coche
    * Un coche tiene propiedades como brand, model, plate, currentSpeed y si está encendido o apagado (isOn).
    * 
    * const car = {
      * brand: "Toyota",
      * model: "Corolla",
      * plate: "ABC-123",
      * currentSpeed: 80,
      * isOn: true,
    * };
    * 
   */
  
// Paso 2: Crear un arreglo de coches con al menos 4 coches. Incluiremos al menos 4 objetos coche dentro de un array.
 const cars = [
    { brand: "Toyota", model: "Corolla", plate: "1234FGH", currentSpeed: 80, isOn: true },
    { brand: "Honda", model: "Civic", plate: "2345BCD", currentSpeed: 50, isOn: false },
    { brand: "Ford", model: "Focus", plate: "3456CDF", currentSpeed: 120, isOn: true },
    { brand: "Nissan", model: "Sentra", plate: "4567DFG", currentSpeed: 60, isOn: false },
  ];
  
  // Paso 3. Imprimir en un p la velocidad del tercer coche
  document.getElementById("car-speed").textContent = `The speed of the third car is ${cars[2].currentSpeed} km/h.`;
  
  // Paso 4: Imprimir en un círculo rojo o verde si hay algún coche encendido o apagado
  const isAnyCarOn = cars.some(car => car.isOn);
  const circle = document.getElementById("status-circle");
  if (isAnyCarOn) {
    circle.style.backgroundColor = "green"; // Encendido
  } else {
    circle.style.backgroundColor = "red"; // Apagado
  }
  
  // Paso 5: Imprimir en un p la marca del primer coche encendido o un mensaje indicando que no hay coches encendidos
  const firstCarOn = cars.find(car => car.isOn);
  document.getElementById("first-car-on").textContent = firstCarOn
    ? `The first car that is on is a ${firstCarOn.brand}.`
    : "No car is on.";
  
  // Paso 6: Imprimir en un p la velocidad media de todos los coches
  const averageSpeed =
    cars.reduce((total, car) => total + car.currentSpeed, 0) / cars.length;
  document.getElementById("average-speed").textContent = `The average speed of all cars is ${averageSpeed.toFixed(2)} km/h.`;


  /* Para depurar la consola:

    * 1. Mostrar todos los coches
    * console.log("All cars:", cars);
    * 
    * 2. Comprobar la velocidad del tercer coche
    * console.log("Third car speed:", cars[2].currentSpeed);
    * 
    * 3. Verificar si algún coche está encendido
    * console.log("Is any car on?", isAnyCarOn);
    * 
    * 4. Mostrar el primer coche encendido (si existe)
    * console.log("First car on:", firstCarOn ? firstCarOn.brand : "No car is on");
    * 
    * 5. Mostrar la velocidad media de todos los coches
    * console.log("Average speed:", averageSpeed);
    * 
    * 
    * Otras depuraciónes:
    * 
    * Mostrar un coche específico:
    * console.log(cars[0]); // Muestra el primer coche
    * 
    * Verificar si todos los coches están apagados:
    * const areAllCarsOff = cars.every(car => !car.isOn);
    * console.log("Are all cars off?", areAllCarsOff);
    * 
    * Cambiar dinámicamente un coche: Cambia propiedades y observa los resultados:
    * cars[2].isOn = false; // Apaga el tercer coche
    * console.log("Updated cars:", cars);
    * 
  */
