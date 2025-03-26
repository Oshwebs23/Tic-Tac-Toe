const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const restartbutton = document.querySelector("#restartbutton");
const winConditions = [
    [0,1,2],
    [3.4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;

beginGame();


function beginGame () {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartbutton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn!`;
};

function cellClicked () {
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != '' || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
};

function updateCell (cell, index) {

};

function changePlayer () {

};

function checkWinner () {

};

function restartGame () {

};
