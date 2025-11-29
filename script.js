let secretNumber = 0;
let isWinner = false;
let highScore = 0;
let currentScore = 5;

const inputGuess = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const numberBox = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector("#btn-again");


const generateSecretNumber = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log("🐞 Le nombre a deviner :", secretNumber);
};

const resetGame = () => {
  isWinner = false;
  currentScore = 5;

  scoreEl.textContent = currentScore;
  btnCheck.disabled = false;
  inputGuess.value = "";

  updateWinState(false);
  generateSecretNumber();
};

const handleCheck = () => {
  if (isWinner || currentScore <= 0) return;

  const guess = Number(inputGuess.value);

  if (!guess || guess < 1 || guess > 20) {
    messageEl.textContent = "⛔ Enter a number between 1 and 20.";
    return;
  }

  currentScore--;
  scoreEl.textContent = currentScore;

  if (currentScore === 0) {
    messageEl.textContent = "💥 You lost the game!";
    btnCheck.disabled = true;
    return;
  }

  if (guess > secretNumber) {
    messageEl.textContent = "📈 Too high!";
  } else if (guess < secretNumber) {
    messageEl.textContent = "📉 Too low!";
  } else {
    isWinner = true;
    updateWinState(true);

    if (currentScore > highScore) {
      highScore = currentScore;
      highScoreEl.textContent = highScore;
    }
  }
};

const updateWinState = (isWin) => {
  if (isWin) {
    messageEl.textContent = "🎉 Correct Number!";
    numberBox.textContent = secretNumber;
  } else {
    messageEl.textContent = "Start guessing...";
    numberBox.textContent = "?";

  }
};

generateSecretNumber();

btnCheck.addEventListener("click", handleCheck);
btnAgain.addEventListener("click", resetGame);
