const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const John = document.getElementById("John");
const Tanya = document.getElementById("Tanya");

next.addEventListener("click", () => {
  John.style.display = "none";

  Tanya.style.display = "flex";
});
prev.addEventListener("click", () => {
  John.style.display = "flex";

  Tanya.style.display = "none";
});
