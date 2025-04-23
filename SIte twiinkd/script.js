let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indications");
let dots = indicator.querySelectorAll("ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function updateSlide(index) {
  container.querySelector(".list .item.active").classList.remove("active");
  indicator.querySelector("ul li.active").classList.remove("active");

  active = index;
  items[active].classList.add("active");
  dots[active].classList.add("active");
  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

prevButton.onclick = () => {
  let nextIndex = active - 1 < firstPosition ? lastPosition : active - 1;
  updateSlide(nextIndex);
};

nextButton.onclick = () => {
  let nextIndex = active + 1 > lastPosition ? firstPosition : active + 1;
  updateSlide(nextIndex);
};

// Autoplay
setInterval(() => {
  let nextIndex = active + 1 > lastPosition ? firstPosition : active + 1;
  updateSlide(nextIndex);
}, 5000); // Tempo ajustado para 5 segundos

