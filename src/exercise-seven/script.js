function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
  }



 /** 
  * Request a string to the user representing an URL and prints the domain, indication if the domain is a 'Github' domain or subdomain.
  * 
  * Solicita una cadena al usuario representando una URL e imprime el dominio, indicando si el dominio es un dominio o subdominio 'Github'.
  * 
  * 1. Solicitar la URL al usuario
  * 2. Validar si la URL pertenece a GitHub o un subdominio
    *  Función para analizar el dominio  
  * 3. Ejecutar la verificación
  * 4. Mostrar el resultado con las clases correspondientes
   */

// Paso 1: Solicitar la URL al usuario
const userUrl = prompt("Introduce una URL para analizar si es de GitHub o un subdominio de GitHub:");

// Paso 2: Validar si la URL pertenece a GitHub o un subdominio
let resultLabel = "La URL no es válida."; // Valor por defecto en caso de error

// Función para analizar el dominio
function checkDomain(url) {
    try {
        // Crear un objeto URL a partir de la cadena introducida
        const parsedUrl = new URL(url);

        // Extraer el dominio
        const domain = parsedUrl.hostname;

        // Verificar si el dominio es de GitHub o un subdominio de GitHub
        if (domain === "github.com" || domain.endsWith(".github.com")) {
            resultLabel = "La URL pertenece a GitHub o es un subdominio de GitHub.";
            return "github";
        } else {
            resultLabel = "La URL no pertenece a GitHub.";
            return "error";
        }
    } catch {
        // En caso de error (si no es una URL válida)
        resultLabel = "La URL no es válida.";
        return "error";
    }
}

// Paso 3: Ejecutar la verificación
const domainStatus = checkDomain(userUrl);

// Paso 4: Mostrar el resultado con las clases correspondientes
if (domainStatus === "github") {
    render(`<p class="grade grade_github">${resultLabel}</p>`);
} else {
    render(`<p class="grade grade_error">${resultLabel}</p>`);
}
