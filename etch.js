function createSquare(size) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.addEventListener('mouseenter', changeSquareColourBlackTenPercent);

  return square;
}

function newDivForGrid() {
  let div = document.createElement('div');
  div.classList.add('div-grid');
  containerGrid.appendChild(div);

  return div;
}

function createGrid(gridSize, squareSize) {
  for (let index = 0; index < gridSize; index++) {
    let row = document.createElement('div');
    row.classList.add('grid-row');
    for (let index = 0; index < gridSize; index++) {
      row.appendChild(createSquare(squareSize));
    }
    divGrid.appendChild(row);
  }
}

function removeGrid() {
  if (containerGrid.contains(divGrid)) {
    containerGrid.removeChild(divGrid);
  }
}

function promptForGridSize() {
  let promptValue = prompt(
    'Please enter a new square grid size (max 100)',
    '16'
  );
  gridSize = Number(promptValue);

  if (gridSize === 0) {
    // Cancel or blank value entered
    return null;
  }

  if (!Number.isInteger(gridSize) || gridSize < 0 || gridSize > 100) {
    promptForGridSize();
  }

  return gridSize;
}

function setupNewGrid() {
  let gridSize = promptForGridSize();
  if (gridSize) {
    createNewGrid(gridSize);
  }
}

function createNewGrid(gridSize) {
  removeGrid();

  divGrid = newDivForGrid();
  createGrid(gridSize, calculateSquareSize(gridSize));
}

function calculateSquareSize(gridSize) {
  return divGrid.offsetWidth / gridSize;
}

function changeSquareColour(e) {
  e.target.classList.add('black-square');
}

function changeSquareColourRandom(e) {
  // https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColour = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = '#' + randomColour;
}

function changeSquareColourBlackTenPercent(e) {
  if (Number(e.target.getAttribute('luma')) === 255) {
    return;
  }

  let lumaStep = 0.1 * 255;

  if (!e.target.hasAttribute('luma')) {
    e.target.setAttribute('luma', `${255 - lumaStep}`);
  } else {
    let currentLuma = Number(e.target.getAttribute('luma'));
    e.target.setAttribute('luma', `${currentLuma - lumaStep}`);
  }
  const newLuma = e.target.getAttribute('luma');
  e.target.style.backgroundColor = `rgb(${newLuma}, ${newLuma}, ${newLuma})`;
}

function addGridSizeButton() {
  const gridSizeButton = document.createElement('button');
  gridSizeButton.textContent = 'Set Grid Size';
  gridSizeButton.addEventListener('click', setupNewGrid);

  containerMain.insertBefore(gridSizeButton, containerGrid);
}

let divGrid;
const containerMain = document.querySelector('.container-main');
const containerGrid = document.querySelector('.container-grid');
addGridSizeButton();

const defaultGridSize = 16;
createNewGrid(defaultGridSize);
