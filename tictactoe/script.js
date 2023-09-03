let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell){
    if(!cell.textContent && !gameOver){
        cell.textContent=currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X'?'O':'X';
        document.getElementById('result').textContent = 'Player $ {currentPlayer}'s turn';
    }

}

function checkWin() {}