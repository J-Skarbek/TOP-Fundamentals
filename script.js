let playerSelect = ''
let computersChoice = ''
let result = ''
let userScore = 0
let compScore = 0
let finalScore = ''

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')

let userChoice = () => {
    playerSelect = prompt("Rock, Paper, or Scissors")
    computerPlay()
    compare(playerSelect, computersChoice)
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
	if (playerSelect === undefined || playerSelect !== 'Scissors' || playerSelect !== 'Paper' || playerSelect !== 'Rock') {
		alert("You need to enter a valid value -- Rock, Paper, or Scissors")
	} else if (playerSelect === 'Scissors' || playerSelect === 'Paper' || playerSelect === 'Rock') {
        if ( playerSelect === computersChoice ) {
			result = 'This is a Tie -- go again!'
			++userScore
			++compScore

        } else if (playerSelect === 'Scissors' && computersChoice === 'Paper') {
			result = 'Computer loses -- Scissors cut Paper!'
			++userScore
			

        } else if (playerSelect === 'Paper' && computersChoice === 'Rock') {
			result = 'Computer Loses -- Paper wraps Rock!'
			++userScore
			

        } else if (playerSelect === 'Rock' && computersChoice === 'Scissors') {
			result = 'Computer Loses -- Rock crushes Scissors!'
			++userScore
			

        } else if (playerSelect === 'Paper' && computersChoice === 'Scissors') {
			result = 'You Lose -- Scissors cut Paper!'
			++compScore
			

        } else if (playerSelect === 'Rock' && computersChoice === 'Paper') {
			result = 'You Lose -- Paper wraps Rock!'
			++compScore
			

        } else if (playerSelect === 'Scissors' && computersChoice === 'Rock') {
			result = 'You Lose -- Rock crushes Scissors!'
			++compScore
			
        }        
	}

	if (userScore > compScore) {
		finalScore = `Congrats, you won! You beat the computer ${userScore} to ${compScore}.`
	} else if (compScore > userScore) {
		finalscore = `Shit, you fucking lost! The computer whooped your ass ${compScore} to ${userScore}.`
	} else if (compScore === userScore) {
		finalscore = `Fuck, this is annoying, it's a goddamned fucking tie.`
	}
}

let fiveRoundGame = () => {
    for (let i = 0; i < 5; i++) {
		playerSelect = prompt("Rock, Paper, or Scissors")
		computerPlay()
		compare(playerSelect, computersChoice)
		console.log(compScore)
		console.log(userScore)
	}
	alert(finalScore)
}

btn.addEventListener('click', userChoice);
btn2.addEventListener('click', fiveRoundGame);