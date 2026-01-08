import { generateSecretNumber } from "./utils.js";

let secretNumber;
let remainingLives;
let highscore = 0;

export const initGame = () => {
  remainingLives = 5;
  secretNumber = generateSecretNumber();
};

export const checkGuess = (guess) => {
  if (!guess || guess < 1 || guess > 20)
    return { status: "error", message: "⛔ Enter a number between 1 and 20." };

  if (guess == secretNumber) {
    highscore = Math.max(remainingLives, highscore);
    return {
      status: "success",
      remainingLives,
      highscore,
      secretNumber,
    };
  }

  remainingLives--;
  if (remainingLives <= 0) {
    return {
      status: "lose",
      remainingLives,
      secretNumber,
    };
  }
  return { status: guess > secretNumber ? "high" : "low", remainingLives };
};

export const getRemainingLives = () => remainingLives;
export const getHighscore = () => highscore;
