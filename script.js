let playerSelect = ''
let computersChoice = ''


let userChoice = () => {
    playerSelect = prompt("Rock, Paper, or Scissors")
    return playerSelect
}

let computerPlay = () => {
    let random = Math.random()
    if (random <= 0.34) {
        computersChoice = 'Scissors'
    } else if (random  >= 0.35 && random <= 0.67) {
        computersChoice = 'Paper'
    } else {
        computersChoice = 'rock'
    }
    return computersChoice
}

// const userChoice = () => {
//     playerSelect = prompt("Rock, Paper, or Scissors")
//     return playerSelect
// }

const btn = document.querySelector('#btn');
btn.addEventListener('click', userChoice);


// function compare(playerInput, computersChoice) {

//     if (computersChoice === 'Scissors' || computersChoice === 'Paper' || computersChoice === 'Rock') {
//         if ( playerInput === computersChoice ) {
//             return 'This is a Tie -- go again!';

//         } else if (playerInput === 'Scissors' && computersChoice === 'Paper') {
//             return 'Computer loses -- Scissors cut Paper!';

//         } else if (playerInput === 'Paper' && computersChoice === 'Rock') {
//             return 'Computer Loses -- Paper wraps Rock!';

//         } else if (playerInput === 'Rock' && computersChoice === 'Scissors') {
//             return 'Computer Loses -- Rock crushes Scissors!';

//         } else if (playerInput === 'Paper' && computersChoice === 'Scissors') {
//             return 'You Lose -- Scissors cut Paper!';

//         } else if (playerInput === 'Rock' && computersChoice === 'Paper') {
//             return 'You Lose -- Paper wraps Rock!';

//         } else if (playerInput === 'Scissors' && computersChoice === 'Rock') {
//             return 'You Lose -- Rock crushes Scissors!';
//         }
//     }

// }