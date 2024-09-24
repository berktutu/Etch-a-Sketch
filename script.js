const button = document.querySelectorAll(".btn");
const buttonSmall = document.querySelector(".btn-small");
const buttonMedium = document.querySelector(".btn-medium");
const buttonLarge = document.querySelector(".btn-large");
const canvas = document.querySelector(".canvas-container");

// Create a webpage with a 16x16 grid of square divs.
const smallCanvas = 16 * 16;
const mediumCanvas = 24 * 24;
const largeCanvas = 32 * 32;

const smallCanvasDivs = 16;
const mediumCanvasDivs = 24;
const largeCanvasDivs = 32;

const fillDivs = function (size, numberOfDivs) {
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.style.flexBasis = `calc(100% / ${numberOfDivs})`;
    div.style.height = `calc(100% / ${numberOfDivs})`;
    canvas.appendChild(div);

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });
  }
};
fillDivs(smallCanvas, smallCanvasDivs);

const clearCanvas = function () {
  canvas.innerHTML = "";
};

button.forEach((btn, i) =>
  btn.addEventListener("click", function () {
    if (btn) {
      clearCanvas();
    }
    if (i === 0) {
      fillDivs(smallCanvas, smallCanvasDivs);
    }
    if (i === 1) {
      fillDivs(mediumCanvas, mediumCanvasDivs);
    }
    if (i === 2) {
      fillDivs(largeCanvas, largeCanvasDivs);
    }
  })
);
