function createSquare(size) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.addEventListener('mouseenter', changeSquareColour);

  return square;
}

function newDivForGrid() {
  let div = document.createElement('div');
  div.classList.add('div-grid');

  return div;
}

function createGrid(gridSize, squareSize) {
  divGrid = newDivForGrid();

  for (let index = 0; index < gridSize; index++) {
    let row = document.createElement('div');
    for (let index = 0; index < gridSize; index++) {
      row.appendChild(createSquare(squareSize));
    }
    divGrid.appendChild(row);
  }
  containerGrid.appendChild(divGrid);
}

function removeGrid() {
  if (containerGrid.contains(divGrid)) {
    containerGrid.removeChild(divGrid);
  }
}

function promptForGridSize() {
  let promptValue = prompt('Please enter a new square grid size', '16');
  let gridSize = Number(promptValue);

  return gridSize;
}

function setupNewGrid() {
  let gridSize = promptForGridSize();
  createNewGrid(gridSize);
}

function createNewGrid(gridSize) {
  removeGrid();
  createGrid(gridSize, 40);
}

function changeSquareColour(e) {
  e.target.classList.add('black-square');
}

function addGridSizeButton() {
  const gridSizeButton = document.createElement('button');
  gridSizeButton.textContent = 'Set Grid Size';
  gridSizeButton.addEventListener('click', setupNewGrid);

  containerMain.insertBefore(gridSizeButton, containerGrid);
}

const defaultGridSize = 16;

const containerMain = document.querySelector('.container-main');
const containerGrid = document.querySelector('.container-grid');
addGridSizeButton();

// Create default starting grid
let divGrid = newDivForGrid();
createNewGrid(defaultGridSize);
