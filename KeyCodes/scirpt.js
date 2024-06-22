const pressKey = document.querySelector(".box");
const details = document.querySelector(".btns");
const key = document.querySelector(".key button");
const keycode = document.querySelector(".keycode button");
const code = document.querySelector(".code button");

document.addEventListener("keydown", function (event) {
  pressKey.classList.add("revoke");
  details.classList.remove("makeActive");
  key.textContent = event.key;
  keycode.textContent = event.keyCode;
  code.textContent = event.code;
});
