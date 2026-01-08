import { navigateTo } from "./transition.js";

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-visible");
});

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  navigateTo("index.html");
});
