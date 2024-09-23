const buttonSmall = document.querySelector(".btn-small");
const buttonMedium = document.querySelector(".btn-medium");
const buttonLarge = document.querySelector(".btn-large");
const canvas = document.querySelector(".canvas-container");

// Create a webpage with a 16x16 grid of square divs.
const numberOfDivs = 16 * 16;

const test = function () {
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.style.flexBasis = `calc(100% / 16)`;
    div.style.height = `calc(100% / 16)`;
    canvas.appendChild(div);

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });
  }
};
test();
