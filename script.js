const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle'
let circleTurn = false;

const cellEl =  document.querySelectorAll('[data-cell');
const board =  document.querySelector('#board');


cellEl.forEach((cell) => {
   return cell.addEventListener('click', handleClick, { once: true })
})

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
]


function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMark(cell, currentClass);
    switchTurns()

    //check for win
    //check for draw
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
    
}

function switchTurns(){
    circleTurn = !circleTurn;
    board.classList.remove(circleTurn ? X_CLASS : CIRCLE_CLASS)
    board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS)
}

function intGame() {
    const pickStarter = Math.floor(Math.random() * (2 - 1 + 1 ) + 1);
    pickStarter === 1 ? circleTurn = true : circleTurn = false;
    board.classList.add(circleTurn ? X_CLASS : CIRCLE_CLASS)
}

intGame();