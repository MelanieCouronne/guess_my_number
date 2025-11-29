let secretNumber = 0;
let isWinner = false;
let highScore = 0;
let currentScore = 5;

const inputGuess = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const numberBox = document.querySelector(".number-box");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector("#btn-again");

const setMessage = (msg) => {
  messageEl.textContent = msg;
};

const setBackground = (color) => {
  document.body.style.backgroundColor = color;
};

const updateNumberBox = (value) => {
  const text = String(value);
  numberBox.textContent = text;
  numberBox.dataset.value = text;
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

const triggerGlitch = () => {
  numberBox.classList.add("glitch");
  setTimeout(() => numberBox.classList.remove("glitch"), 200);
};

const handleCheck = () => {
  if (isWinner || currentScore <= 0) return;

  const guess = Number(inputGuess.value);

  if (!guess || guess < 1 || guess > 20) {
    setMessage("⛔ Enter a number between 1 and 20.");
    triggerGlitch();
    return;
  }

  currentScore--;
  scoreEl.textContent = currentScore;

  if (currentScore === 0) {
    setMessage("💥 You lost the game!");
    setBackground("#d03d23ff");
    btnCheck.disabled = true;
    triggerGlitch();
    return;
  }

  if (guess > secretNumber) {
    setMessage("📈 Too high!");
    triggerGlitch();
  } else if (guess < secretNumber) {
    setMessage("📉 Too low!");
    triggerGlitch();
  } else {
    isWinner = true;
    updateWinState(true);
    numberBox.classList.remove("glitch");

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
    updateNumberBox(secretNumber);
    numberBox.classList.add("win");
    setTimeout(() => {
      numberBox.classList.remove("win");
    }, 600);
  } else {
    setMessage("Start guessing...");
    setBackground("#222");
    updateNumberBox("?");
  }
};

generateSecretNumber();

btnCheck.addEventListener("click", handleCheck);
btnAgain.addEventListener("click", resetGame);
