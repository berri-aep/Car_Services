const toggleMenu = document.querySelector(".header--toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});
