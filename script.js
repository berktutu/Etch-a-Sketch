const button = document.querySelectorAll(".btn");
const canvas = document.querySelector(".canvas-container");

// Create a webpage with a 16x16 grid of square divs.
const canvasSetup = {
  gridDimensions: {
    small: 16,
    medium: 24,
    large: 32,
  },
};

const fillDivs = function (size) {
  const numberOfDivs = size * size;
  for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("canvas-div");
    div.style.flexBasis = `calc(100% / ${size})`;
    div.style.height = `calc(100% / ${size})`;
    canvas.appendChild(div);
  }
};

canvas.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("canvas-div")) {
    event.target.style.backgroundColor = "black";
  }
});

fillDivs(canvasSetup.gridDimensions.small);

const clearCanvas = function () {
  canvas.innerHTML = "";
};

const gridSizes = [
  canvasSetup.gridDimensions.small,
  canvasSetup.gridDimensions.medium,
  canvasSetup.gridDimensions.large,
];

button.forEach((btn, btnIndex) => {
  btn.addEventListener("click", function () {
    clearCanvas();
    fillDivs(gridSizes[btnIndex]);
  });
});
