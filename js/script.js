const fans = document.querySelector(".fans");
const fish = document.querySelector(".fish");
const frens = document.querySelector(".pets");
const ball = document.querySelector(".ball");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

frens.addEventListener("mouseover", function () {
  frens.innerText = "20K";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
