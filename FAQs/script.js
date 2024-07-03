const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    update();
    toggle.parentNode.classList.toggle("active");
  });
});

function update() {
  toggles.forEach((toggle) => {
    toggle.parentNode.classList.remove("active");
  });
}
