// Definir o índice inicial da imagem
let currentIndex = 0;

// Selecionar todas as imagens dentro do carrossel
const images = document.querySelectorAll('.carousel img');

// Obter o total de imagens
const totalImages = images.length;

// Função para mover o carrossel
function moveCarousel(step) {
  // Atualizar o índice com base no passo (1 para próxima imagem, -1 para a anterior)
  currentIndex += step;

  // Garantir que o índice fique dentro do intervalo das imagens
  if (currentIndex >= totalImages) {
    currentIndex = 0; // Volta à primeira imagem
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 1; // Volta à última imagem
  }

  // Mover a galeria de imagens para a nova posição
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Faz o slide
}
