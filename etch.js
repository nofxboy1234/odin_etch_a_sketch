function createSquare(size) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.addEventListener('mouseenter', changeSquareColour);

  return square;
}

function createGrid(gridSize, squareSize) {
  for (let index = 0; index < gridSize; index++) {
    let row = document.createElement('div');
    for (let index = 0; index < gridSize; index++) {
      row.appendChild(createSquare(squareSize));
    }
    containerGrid.appendChild(row);
  }
}

function changeSquareColour(e) {
  e.target.classList.add('black-square');
}

function addGridSizeButton() {
  // const buttonDiv = document.createElement('div');

  const gridSizeButton = document.createElement('button');
  gridSizeButton.textContent = 'Set Grid Size';
  containerMain.appendChild(gridSizeButton);
}

const containerMain = document.querySelector('.container-main');
const containerGrid = document.querySelector('.container-grid');
addGridSizeButton();
createGrid(16, 40);
containerMain.appendChild(containerGrid);
