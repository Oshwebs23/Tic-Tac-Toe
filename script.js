let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameActive = true;

function playerTurn (clickedCellIndex) {
    if(gameboard[clickedCellIndex] !== '' || !gameActive){
        return;
    }
    gameBoard[clickedCellIndex] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

};

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked, false);
});

function cellClicked(clickedCellEvent) {
    const clickedCell = clickedcellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.id.replace ('cell-', '')) -1 ;

    if (gameBoard [clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    handlePlayerTurn(clickedCellIndex);
    updateUI();
};