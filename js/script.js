// Atualiza o ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Animação suave ao rolar
const scrollElements = document.querySelectorAll(".reveal");
const elementInView = (el, div = 150) => el.getBoundingClientRect().top <= (window.innerHeight - div);
const displayScrollElement = (el) => el.classList.add("active");
const hideScrollElement = (el) => el.classList.remove("active");

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => elementInView(el) ? displayScrollElement(el) : hideScrollElement(el));
};
window.addEventListener("scroll", () => handleScrollAnimation());
