const navOpenButton = document.querySelector(".navigation .nav_open button");
const navCloseButton = document.querySelector(".navigation .nav_close button");
const navContainer = document.querySelector(".navigation .container");

navOpenButton.addEventListener("click", () => {
  navContainer.showModal();
});
navCloseButton.addEventListener("click", () => {
  navContainer.close();
});
