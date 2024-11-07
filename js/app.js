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
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtn = document.getElementById('reset-button');


/*--------------------------------- Functions --------------------------------*/
//Sets the initial condition of the game
function init() {
    console.log('Initializing the game...');
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
}
//Updates game status
function render() {
    if (!squareEls.length || !messageEl) return;

    // Updates board
    squareEls.forEach((square, idx) => {
        square.textContent = board[idx];
        // Add visual feedback through classes
        square.classList.remove('X', 'O');
        if (board[idx]) {
            square.classList.add(board[idx]);
        }
    });

    if (winner) {
        messageEl.textContent = `Player ${turn} Wins!`;
        messageEl.classList.add('winner-message');
    } else if (tie) {
        messageEl.textContent = 'It\'s a Tie!';
        messageEl.classList.add('tie-message');
    } else {
        messageEl.textContent = `Player ${turn}\'s Turn`;
        messageEl.classList.remove('winner-message', 'tie-message');
    }
}

function squareClick(index) { //checks if square is free
    if (winner || tie || board[index] !== '') {
     return;
    }
    board[index] = turn; //updates board with user's choice
    checkWinOrTie();//checks if there's a winner or a tie
    render();
    turn = turn === 'X' ? 'O' : 'X'; //switches user's turn
 }

function checkWinOrTie() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]              // diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
            return;
        }
    }

    if (board.every(square => square !== '')) {
        tie = true; //Looks for winner or squares remaining
    }
}




 

/*------------------------------ Event Listeners -----------------------------*/
for (let i = 0; i < squareEls.length; i++) {
    //loops through each square
    squareEls[i].addEventListener('click', function() {
        squareClick(i);
    });
}


init();

