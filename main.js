import "./style.scss";

const burger = document.querySelector("header .burger");
const menu = document.querySelector("header .menu");
const button = document.querySelector("header button");

const paragraph = document.querySelector(".description p");

burger.addEventListener("click", function () {
  this.classList.toggle("close");
  menu.classList.toggle("active");
  button.classList.toggle("active");
});

fetch("https://baconipsum.com/api/?type=lucky&sentences=1")
  .then((res) => res.json())
  .then((res) => {
    paragraph.innerText = res[0]
  });
