function createSquare(size) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  return square;
}

function createGrid(gridSize, squareSize) {
  for (let index = 0; index < gridSize; index++) {
    container.appendChild(createSquare(squareSize));
  }
}

const container = document.querySelector('.container');
createGrid(16, 50);
