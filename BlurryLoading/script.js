const label = document.querySelector(".loading-text");
const bg = document.querySelector(".content");
let load = 0;

let num = setInterval(() => {
  load++;
  if (load >= 100) {
    clearInterval(num);
  }
  label.innerHTML = `${load}%`;
  label.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 17, 0)}px)`;
}, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
