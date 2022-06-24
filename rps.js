let playerSelection = '';
let playerInput = playerSelection;
let computerChoice = '';
let computersChoice = computerPlay();
let gameResults = compare(playerInput, computersChoice);
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    playerSelection = prompt("Rock, Paper, or Scissors");
    return playerSelection;
})

// btn.addEventListener('click', () => {
//     playerSelection = prompt("Rock, Paper, or Scissors");
//     return playerSelection;
// })


function computerPlay() {

    computerChoice = Math.random();

    if (computerChoice <= 0.34) {
        return 'Scissors';
    } else if (computerChoice >= 0.35 && computerChoice <= 0.67) {
        return 'Paper';
    } else {
        return 'Rock';
    }
}

// let computersChoice = computerPlay();

function selectOption() {
    let playerSelection = prompt("Rock, Paper, or Scissors");
    return playerSelection; 
}

// let playerInput = selectOption();

function compare(playerInput, computersChoice) {

    if (computersChoice === 'Scissors' || computersChoice === 'Paper' || computersChoice === 'Rock') {
        if ( playerInput === computersChoice ) {
            return 'This is a Tie -- go again!';

        } else if (playerInput === 'Scissors' && computersChoice === 'Paper') {
            return 'Computer loses -- Scissors cut Paper!';

        } else if (playerInput === 'Paper' && computersChoice === 'Rock') {
            return 'Computer Loses -- Paper wraps Rock!';

        } else if (playerInput === 'Rock' && computersChoice === 'Scissors') {
            return 'Computer Loses -- Rock crushes Scissors!';

        } else if (playerInput === 'Paper' && computersChoice === 'Scissors') {
            return 'You Lose -- Scissors cut Paper!';

        } else if (playerInput === 'Rock' && computersChoice === 'Paper') {
            return 'You Lose -- Paper wraps Rock!';

        } else if (playerInput === 'Scissors' && computersChoice === 'Rock') {
            return 'You Lose -- Rock crushes Scissors!';
        }
    }

}

// let gameResults = compare(playerInput, computersChoice);

// alert(gameResults);

console.log(compare(playerInput, computersChoice));



