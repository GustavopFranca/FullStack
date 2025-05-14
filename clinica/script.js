// Função para exibir o botão de rolar para o topo
window.onscroll = function() {
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Função para rolar a página para o topo
document.getElementById('scrollTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
