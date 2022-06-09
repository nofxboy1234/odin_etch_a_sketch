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
    container.appendChild(row);
  }
}

function changeSquareColour(e) {
  e.target.classList.add('black-square');
}

const container = document.querySelector('.container');
createGrid(16, 40);
