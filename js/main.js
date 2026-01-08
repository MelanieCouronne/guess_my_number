import { initGame, checkGuess } from "./game.js";
import { openGameOverModal, closeGameOverModal } from "./modal.js";
import {
  elements,
  setMessage,
  updateLives,
  updateHighscore,
  revealSecretNumber,
  triggerGlitch,
  setBodyBackgroundColor,
  showBtn,
  hideBtn,
  clearInput,
} from "./ui.js";
import { navigateTo } from "./transition.js";

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-visible");
});

initGame();

elements.modalOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    if (action === "yes") {
      closeGameOverModal();

      setTimeout(() => {
        initGame();
        setMessage("Start guessing...");
        updateLives(5);
        revealSecretNumber("?");
        setBodyBackgroundColor("#1e1e1e");
        clearInput();
        showBtn(elements.btnCheck);
      }, 600);
    }

    if (action === "no") {
      navigateTo("../bye.html");
    }
  });
});

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const guess = Number(elements.input.value);
  const response = checkGuess(guess);

  switch (response.status) {
    case "error":
      setMessage(response.message);
      triggerGlitch();
      clearInput();
      break;

    case "high":
      setMessage("⬆️ Too high!");
      triggerGlitch();
      updateLives(response.remainingLives);
      clearInput();
      break;

    case "low":
      setMessage("⬇️ Too low!");
      triggerGlitch();
      updateLives(response.remainingLives);
      clearInput();
      break;

    case "success":
      setMessage("🎉 You guess my number!");
      setBodyBackgroundColor("#60b347");
      revealSecretNumber(response.secretNumber);
      updateHighscore(response.highscore);
      hideBtn(elements.btnCheck);
      setTimeout(() => {
        openGameOverModal();
      }, 900);
      break;

    default:
      setMessage("💥 Game over!");
      setBodyBackgroundColor("#d03d23ff");
      updateLives(response.remainingLives);
      revealSecretNumber(response.secretNumber);
      hideBtn(elements.btnCheck);
      setTimeout(() => {
        openGameOverModal();
      }, 900);
      break;
  }
});
