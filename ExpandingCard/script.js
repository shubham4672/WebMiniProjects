const cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach((card) => {
  card.addEventListener("click", () => {
    update();
    card.classList.add("active");
  });
});

function update() {
  cards.forEach((card) => [card.classList.remove("active")]);
}
