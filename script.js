const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle'
let circleTurn = false;

const cellEl =  document.querySelectorAll('[data-cell');
const board =  document.querySelector('#board');
const winnerText =  document.querySelector('h1');


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]


function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)){
       return endGame(currentClass)
    }

    switchTurns()
    setBoardHoverClass()

    //check for win
    //check for draw
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
    
}

function setBoardHoverClass() {
    board.classList.remove(circleTurn ? X_CLASS : CIRCLE_CLASS)
    board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS)
}

function switchTurns(){
    circleTurn = !circleTurn;
}

function intGame() {
    cellEl.forEach((cell) => {
        return cell.addEventListener('click', handleClick, { once: true })
     })

    const pickStarter = Math.floor(Math.random() * (2 - 1 + 1 ) + 1);
    pickStarter === 1 ? circleTurn = true : circleTurn = false;
    setBoardHoverClass()
}

function checkWin(currentClass){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellEl[index].classList.contains(currentClass)
        })
    })
}

function endGame(winner) {
    winnerText.style.display = 'block';
    winnerText.textContent = `${winner} wins`;
    board.classList.remove(CIRCLE_CLASS);
    board.classList.remove(X_CLASS);
    
    cellEl.forEach((cell) => {
        return cell.removeEventListener('click', handleClick)
     })
}

intGame();