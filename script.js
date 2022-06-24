let playerSelect = ''
let computersChoice = ''
let result = ''

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')

let userChoice = () => {
    playerSelect = prompt("Rock, Paper, or Scissors")
    computerPlay()
    compare(playerSelect, computersChoice)
    alert(result)
}

let multigame = () => {
    playerSelect = prompt("Rock, Paper, or Scissors")
    computerPlay()
    fiveRoundGame()
    alert(result)
    
}

let computerPlay = () => {
    let random = Math.random()
    if (random <= 0.34) {
        computersChoice = 'Scissors'
    } else if (random  >= 0.35 && random <= 0.67) {
        computersChoice = 'Paper'
    } else {
        computersChoice = 'Rock'
    }
    return computersChoice
}

let compare = (playerSelect, computersChoice) => {
    if (playerSelect === 'Scissors' || playerSelect === 'Paper' || playerSelect === 'Rock') {
        if ( playerSelect === computersChoice ) {
            result = 'This is a Tie -- go again!'

        } else if (playerSelect === 'Scissors' && computersChoice === 'Paper') {
            result = 'Computer loses -- Scissors cut Paper!'

        } else if (playerSelect === 'Paper' && computersChoice === 'Rock') {
            result = 'Computer Loses -- Paper wraps Rock!'

        } else if (playerSelect === 'Rock' && computersChoice === 'Scissors') {
            result = 'Computer Loses -- Rock crushes Scissors!'

        } else if (playerSelect === 'Paper' && computersChoice === 'Scissors') {
            result = 'You Lose -- Scissors cut Paper!'

        } else if (playerSelect === 'Rock' && computersChoice === 'Paper') {
            result = 'You Lose -- Paper wraps Rock!'

        } else if (playerSelect === 'Scissors' && computersChoice === 'Rock') {
            result = 'You Lose -- Rock crushes Scissors!'
        }        
    }
}

let fiveRoundGame = () => {
    for (let i = 0; i < 5; i++) {
        multigame()
    }
}

btn.addEventListener('click', userChoice);
btn2.addEventListener('click', multigame);