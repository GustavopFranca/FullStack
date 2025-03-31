const secretNumber = Math.floor(Math.random() * 100);
const input = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const container = document.getElementById("container");

function checkGuess() {
  const userGuess = parseInt(input.value);

  if (userGuess < 0 || userGuess > 99 || isNaN(userGuess)) {
    feedback.textContent = "Por favor, insira um número válido entre 0 e 99.";
    return;
  }

  if (userGuess === secretNumber) {
    feedback.textContent = "Parabéns! Você acertou o número!";
    container.style.setProperty("background-color", "lightgreen");
  } else {
    container.style.setProperty("background-color", "red");
    if (userGuess > secretNumber) {
      feedback.textContent = "Tente um número menor.";
    } else {
      feedback.textContent = "Tente um número maior.";
    }
  }
}