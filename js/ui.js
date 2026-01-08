export const elements = {
  form: document.getElementById("guess-form"),
  input: document.getElementById("guess-input"),
  message: document.querySelector(".message"),
  lives: document.querySelector(".lives"),
  highScore: document.querySelector(".highscore"),
  numberBox: document.querySelector(".number-box"),
  btnCheck: document.querySelector(".btn-check"),
  btnAgain: document.getElementById("btn-again"),
  modal: document.getElementById("game-over-modal"),
  modalOptions: [
    ...document
      .getElementById("game-over-modal")
      .querySelectorAll(".modal__option"),
  ],
  modalIndex: 0,
};

export const setMessage = (text) => {
  elements.message.textContent = text;
};

export const updateLives = (value) => {
  elements.lives.textContent = value;
};

export const updateHighscore = (value) => {
  elements.highScore.textContent = value;
};

export const revealSecretNumber = (value) => {
  elements.numberBox.textContent = value;
  elements.numberBox.dataset.value = value;
};

export const triggerGlitch = () => {
  elements.numberBox.classList.add("glitch");
  setTimeout(() => elements.numberBox.classList.remove("glitch"), 230);
};

export const setBodyBackgroundColor = (hex) => {
  document.body.style.backgroundColor = hex;
};

export const showBtn = (btn) => {
  btn.style.visibility = "visible";
};

export const hideBtn = (btn) => {
  btn.style.visibility = "hidden";
};

export const clearInput = () => {
  elements.input.value = "";
};
