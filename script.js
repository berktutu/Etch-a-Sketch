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
fillDivs(canvasSetup.gridDimensions.small);

const getRandomColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const getRandomOpacity = function () {
  const opacity = Math.random().toFixed(2);
  return opacity;
};

let isDrawing = false;

const applyColor = function (event) {
  if (isDrawing && event.target.classList.contains("canvas-div")) {
    event.target.style.backgroundColor = getRandomColor();
    event.target.style.opacity = getRandomOpacity();
  }
};

canvas.addEventListener("mousedown", function (e) {
  if (e.button === 0) {
    isDrawing = true;
    applyColor(e);
  }
});

canvas.addEventListener("mousemove", applyColor);
canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});
canvas.addEventListener("mouseleave", function () {
  isDrawing = false;
});

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
