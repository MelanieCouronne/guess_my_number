import { elements } from "./ui.js";

export const openGameOverModal = () => {
  elements.modal.removeAttribute("inert");
  elements.modal.classList.add("is-visible");
  elements.modalIndex = 0;
  updateModalSelection();
  document.addEventListener("keydown", handleModalKeys);
};

export const closeGameOverModal = () => {
  elements.modal.classList.remove("is-visible");
  document.removeEventListener("keydown", handleModalKeys);
  elements.modal.setAttribute("inert", "");
  elements.input.focus();
};

const updateModalSelection = () => {
  elements.modalOptions.forEach((btn, i) =>
    btn.classList.toggle("is-active", i === elements.modalIndex)
  );
  elements.modalOptions[elements.modalIndex].focus();
};

const handleModalKeys = (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    elements.modalIndex =
      (elements.modalIndex + 1) % elements.modalOptions.length;
    updateModalSelection();
  }

  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    elements.modalIndex =
      (elements.modalIndex - 1 + elements.modalOptions.length) %
      elements.modalOptions.length;
    updateModalSelection();
  }

  if (e.key === "Tab") {
    e.preventDefault();

    if (e.shiftKey) {
      elements.modalIndex =
        (elements.modalIndex - 1 + elements.modalOptions.length) %
        elements.modalOptions.length;
    } else {
      elements.modalIndex =
        (elements.modalIndex + 1) % elements.modalOptions.length;
    }
    updateModalSelection();
  }

  if (e.key === "Enter") {
    elements.modalOptions[elements.modalIndex].click();
  }
};
