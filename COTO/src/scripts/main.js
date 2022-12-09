import "../common/index.css"

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const search = document.querySelector("button.search-btn");
const searchBox = document.querySelector(".search-box");
const close = document.querySelector("button.close-btn");

search.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
});

close.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
});