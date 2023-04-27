const images = document.querySelectorAll(".image-slider img");

const nextbtn = document.querySelector(".left");
const prevbtn = document.querySelector(".right");

let index = 0;
// let width = images[index].clientWidth;

nextbtn.addEventListener("click", () => {
  index++;
  slideimg();
  if (index === images.length - 1) {
    nextbtn.classList.add("disabled");
  } else {
    prevbtn.classList.remove("disabled");
  }
});

prevbtn.addEventListener("click", () => {
  index--;
  slideimg();
  if (index === 0) {
    prevbtn.classList.add("disabled");
  } else {
    nextbtn.classList.remove("disabled");
  }
});

const slideimg = () => {
  images.forEach((slide) => {
    slide.style.transform = `translate(${-index * 100}%)`;
  });
};
