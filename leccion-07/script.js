// Creacion de constantes de elementos para manipular mas intuitivamente el codigo
const passwordDisplay = document.getElementById("generatedPassword");
const copyButton = document.getElementById("copyButton");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateButton = document.getElementById("generateButton");
const strengthIndicator = document.querySelector(".strength-bar");

// Caracteres a usar para generar contraseñas
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";

lengthSlider.addEventListener("input", () => { //definir el largo de la contraseña segun lo indique el usuario
  lengthValue.textContent = lengthSlider.value;
});


function generatePassword() { //Comenzamos la funcion que genera la contraseña
  let characterPool = "";
  let password = "";

    // Segun las opciones que defina el usuario (si el checkbox del elemento seleccionado se encuentra marcado agregar todos los caracteres de ese tipo a la variable Pool auxiliar para usarlos luego)
  if (includeUppercase.checked) characterPool += UPPERCASE_CHARS;
  if (includeLowercase.checked) characterPool += LOWERCASE_CHARS;
  if (includeNumbers.checked) characterPool += NUMBERS;
  if (includeSymbols.checked) characterPool += SYMBOLS;

  if (characterPool.length === 0) { // Mostrar alerta si el usuario no selecciona ninguna opcion 
    alert("Please select at least one option!");
    return "";
  }

  for (let i = 0; i < lengthSlider.value; i++) { // Ciclo que va agregando caracteres aleatorios de la variable pool a la contraseña segun los parametros que dio el usuario como longitud
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  passwordDisplay.value = password;

  updateStrengthIndicator(password); //indicamos segun la nueva contraseña generada su seguridad
}

function updateStrengthIndicator(password) { //funcion que testea la seguridad de la contraseña 
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password);

  let strengthScore = hasUppercase + hasLowercase + hasNumbers + hasSymbols; //sumamos los resultados de los test

  strengthIndicator.className = "strength-bar"; 
  if (strengthScore === 1) { //indicamos la seguridad
    strengthIndicator.classList.add("weak");
    strengthIndicator.textContent = "WEAK";
  } else if (strengthScore === 2) {
    strengthIndicator.classList.add("medium");
    strengthIndicator.textContent = "MEDIUM";
  } else if (strengthScore >= 3) {
    strengthIndicator.classList.add("strong");
    strengthIndicator.textContent = "STRONG";
  }
}

copyButton.addEventListener("click", () => { // Alert cuando el usuario copie la contraseña generada
  navigator.clipboard.writeText(passwordDisplay.value).then(() => {
    alert("Password copied to clipboard!");
  });
});

generateButton.addEventListener("click", generatePassword); //cuando el usuario de click, generamos la contraseña
