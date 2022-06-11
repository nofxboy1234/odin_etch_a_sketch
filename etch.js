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
  div.style.width = '600px';
  div.style.height = '600px';
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
  // containerGrid.appendChild(divGrid);
}

function removeGrid() {
  if (containerGrid.contains(divGrid)) {
    containerGrid.removeChild(divGrid);
  }
}

function promptForGridSize() {
  // let gridSize = 16;
  // while (Number.isInteger(gridSize) && gridSize > 100) {

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
  // console.log(divGrid.offsetWidth);
  // console.log(divGrid.clientWidth);

  return divGrid.getBoundingClientRect().width / gridSize;

  // return 500 / 16;
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

let divGrid;
const containerMain = document.querySelector('.container-main');
const containerGrid = document.querySelector('.container-grid');
addGridSizeButton();

const defaultGridSize = 16;
createNewGrid(defaultGridSize);

// containerGrid.style.width = '300px';
// containerGrid.style.height = '300px';
// let width = containerGrid.offsetWidth;
// let height = containerGrid.offsetHeight;
// console.log({ width, height });
