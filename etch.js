function createSquare(size) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  return square;
}

function createGrid(size) {
  container.appendChild(createSquare(50));
}

const container = document.querySelector('.container');
createGrid(16);
