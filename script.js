const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status");
const restartbutton = document.querySelector("#restartButton");
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;



function beginGame () {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartbutton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn!`;
    running = true
};

function cellClicked () {
    const cellIndex = this.getAttribute("data-cell-index");

    if(options[cellIndex] != ""|| !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
    //changePlayer(); used to test changePlayer() function 
};

function updateCell (cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

};

function changePlayer () {
    currentPlayer = (currentPlayer == "X" ) ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn!`;
};

function checkWinner () {
    let gameWin = false;

    for(let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        } 
        if(cellA == cellB && cellB == cellC){
            gameWin = true;
            break;
        }
        
    }

    if(gameWin){
        statusText.textContent = `${currentPlayer} has won the game!`;
        running = false;

    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }

};

function restartGame () {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
   
};


beginGame();