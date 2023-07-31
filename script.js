const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

function handleCellClick(e) {
  const cell = e.target;

  if (cell.textContent !== '') return;

  cell.textContent = currentPlayer;

  if (checkWin()) {
    alert(`O jogador ${currentPlayer} venceu!`);
    resetGame();
    return;
  }

  if (checkDraw()) {
    alert('Empate!');
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    const cell1 = cells[combo[0]].textContent;
    const cell2 = cells[combo[1]].textContent;
    const cell3 = cells[combo[2]].textContent;

    return cell1 !== '' && cell1 === cell2 && cell2 === cell3;
  });
}

function checkDraw() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });

  currentPlayer = 'X';
}