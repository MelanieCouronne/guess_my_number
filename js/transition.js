export const navigateTo = (url) => {
  document.body.classList.remove("is-visible");

  setTimeout(() => {
    window.location.href = url;
  }, 300);
};
