document.addEventListener("DOMContentLoaded", () => {
  const servicos = document.querySelectorAll('.servico');
  servicos.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
    }, i * 400);
  });
});