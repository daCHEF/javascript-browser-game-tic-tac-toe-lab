/*-------------------------------- Pseudocode --------------------------------*/
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*--------------------------------- Constants --------------------------------*/



/*----------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------- Cached Element References ------------------------*/
const squareEls = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
];
const messageEl = document.getElementById('message');


/*--------------------------------- Functions --------------------------------*/
function init() {
    console.log('Initializing the game...');
    board = ['', '', '', '', '', '', '', ''];
    turn = 'x';
    winner = false;
    tie = false;
    render();
}
function render() {
    for (let i = 0; i < board.length; i++) {
        let squareElement = document.getElementById(i.toString('0'));
        squareElement.textContent = board[i];
    }
    
}
 

/*------------------------------ Event Listeners -----------------------------*/



