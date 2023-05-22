const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector(".menuBar");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
