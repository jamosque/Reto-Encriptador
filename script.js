// Paso 9: La referencia al archivo JS se hace en el HTML: <script src="script.js"></script> 

// Paso 10: Declaración de variables
const textoInput = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const cifrarBtn = document.getElementById("cifrar");
const descifrarBtn = document.getElementById("descifrar");
const copiarBtn = document.getElementById("copiar");

// Paso 12: Función encriptar
function encriptar() {
  const texto = textoInput.value;
  if (validarEntrada(texto)) {
    const textoCifrado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    mostrarResultado(textoCifrado);
  }
}

// Paso 13: Función desencriptar
function desencriptar() {
  const textoCifrado = textoInput.value;
  if (validarEntrada(textoCifrado)) {
    const texto = textoCifrado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    mostrarResultado(texto);
  }
}

// Paso 14: Validación (solo letras minúsculas y sin caracteres especiales)
function validarEntrada(texto) {
  return /^[a-z\s]+$/.test(texto);
}

// Función para mostrar el resultado y el botón de copiar
function mostrarResultado(texto) {
  resultado.textContent = texto;
  resultado.style.display = "block";
  copiarBtn.style.display = "block";
}

// Paso 15: Función para copiar el texto
function copiarTexto() {
  navigator.clipboard.writeText(resultado.textContent)
    .then(() => {
      // Opcional: Mostrar un mensaje al copiar
      alert("Texto copiado al portapapeles.");
    })
    .catch(err => {
      console.error("Error al copiar el texto: ", err);
    });
}

// Asignar eventos a los botones
cifrarBtn.addEventListener("click", encriptar);
descifrarBtn.addEventListener("click", desencriptar);
copiarBtn.addEventListener("click", copiarTexto);