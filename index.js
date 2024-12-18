const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active"); // Viser/skjuler navigationen
  burgerMenu.classList.toggle("toggle"); // Animerer stregerne
});
