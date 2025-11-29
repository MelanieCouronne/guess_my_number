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

const setMessage = (msg) => {
  messageEl.textContent = msg;
};

const setBackground = (color) => {
  document.body.style.backgroundColor = color;
};

const generateSecretNumber = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log("👉 Secret number (chut):", secretNumber);
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
    setMessage("⛔ Enter a number between 1 and 20.");
    return;
  }

  currentScore--;
  scoreEl.textContent = currentScore;

  if (currentScore === 0) {
    setMessage("💥 You lost the game!");
    setBackground("#d03d23ff");
    btnCheck.disabled = true;
    return;
  }

  if (guess > secretNumber) {
    setMessage("📈 Too high!");
  } else if (guess < secretNumber) {
    setMessage("📉 Too low!");
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
    setMessage("🎉 Correct Number!");
    setBackground("#60b347");
    numberBox.textContent = secretNumber;
    numberBox.classList.add("win");
    setTimeout(() => {
      numberBox.classList.remove("win");
    }, 600);
  } else {
    setMessage("Start guessing...");
    numberBox.textContent = "?";
    setBackground("#222");
  }
};

generateSecretNumber();

btnCheck.addEventListener("click", handleCheck);
btnAgain.addEventListener("click", resetGame);
