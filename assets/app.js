const form = document.querySelector("form");
const copy = document.querySelector(".copy-icon");
const passwordPlace = document.querySelector(".pw");
const passwordLength = document.querySelector("#pw-len");
const buttonGenerate = document.querySelector("#generate")

const inputUpper = document.querySelector("#upper");
const inputLower = document.querySelector("#lower");
const inputNumber = document.querySelector("#number");
const inputSymbol = document.querySelector("#symbol");

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

// Retorna na função um item aleatorio
const getUpperLetters = () => {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};
const getLowerLetters = () => {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};
const getNumbers = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};
const getSymbol = () => {
  return symbol[Math.floor(Math.random() * symbol.length)];
};

// Cria um Password aleatorio com os itens retornados anteriormente
const passwordRandom = () => {
  let password = [];

  // Adiciona na 'let password' o item retornado
  if (inputUpper.checked) {
    password.push(getUpperLetters());
  }
  if (inputLower.checked) {
    password.push(getLowerLetters());
  }
  if (inputNumber.checked) {
    password.push(getNumbers());
  }
  if (inputSymbol.checked) {
    password.push(getSymbol());
  }

  if (password.length === 0) return "";

  // Retorna UM ITEM aleatório do Password Criado
  return password[Math.floor(Math.random() * password.length)];
};

// Executa passwordRandom() o numero de vezes baseado na 'const len'
// Cada vez que passwordRandom() é executado, adiciona o item retornado na 'let password'
const generatePassword = () => {
  const len = passwordLength.value;
  let password = "";
  for (let i = 0; i < len; i++) {
    const x = passwordRandom();
    password += x;
  }
  return password;
};

// Evento do 'buttonGenerate' onde o password gerado em generatePassword() é inserido no HTML
buttonGenerate.addEventListener("click", (event) => {
  event.preventDefault();

  passwordPlace.classList.remove('opacity-50')
  passwordPlace.classList.add("fw-bold");
  passwordPlace.innerHTML = generatePassword();
});

// COPY
// Função para copiar o password
const copyToClipboard = (password) => {
  navigator.clipboard.writeText(password);
};

// Evento para copiar o Password do 'passwordPlace'
copy.addEventListener("click", (event) => {
event.preventDefault()

copyToClipboard(passwordPlace.textContent);
});
