let playerSelect = ''
let computersChoice = ''
let result = ''
let userScore = 0
let compScore = 0
let finalScore = ''

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')

let userChoice = () => {
	playerSelect = prompt("Rock, Paper, or scissors").toLowerCase()
	validateInput()
}

let validateInput = () => {
	if (playerSelect === null || playerSelect === '') {
		return 
	} else if (playerSelect === 'scissors' || playerSelect === 'paper' || playerSelect === 'rock') {
		playerSelect.toLowerCase()
		computerPlay()
		compare(playerSelect, computersChoice)
		alert(result)
	} else {
		alert("You fucked up the input!")
		playerSelect = prompt("Rock, Paper, or scissors").toLowerCase()
		validateInput()
	}
}

let validateByFive = () => {
	if (playerSelect === null || playerSelect === '') {
		return
	} else if (playerSelect === 'scissors' || playerSelect === 'paper' || playerSelect === 'rock') {
		computerPlay()
		compare(playerSelect, computersChoice)
	} else {
		alert("You fucked up the input!")
	}
}

let computerPlay = () => {
    let random = Math.random()
    if (random <= 0.34) {
        computersChoice = 'scissors'
    } else if (random  >= 0.35 && random <= 0.67) {
        computersChoice = 'paper'
    } else {
        computersChoice = 'rock'
    }
    return computersChoice
}

let compare = (playerSelect, computersChoice) => {
	if ( playerSelect === computersChoice ) {
		result = 'This is a Tie -- go again!'
		++userScore
		++compScore

	} else if (playerSelect === 'scissors' && computersChoice === 'paper') {
		result = 'Computer loses -- Scissors cut Paper!'
		++userScore
		

	} else if (playerSelect === 'paper' && computersChoice === 'rock') {
		result = 'Computer Loses -- Paper wraps Rock!'
		++userScore
		

	} else if (playerSelect === 'rock' && computersChoice === 'scissors') {
		result = 'Computer Loses -- Rock crushes Scissors!'
		++userScore
		

	} else if (playerSelect === 'paper' && computersChoice === 'scissors') {
		result = 'You Lose -- Scissors cut Paper!'
		++compScore
		

	} else if (playerSelect === 'rock' && computersChoice === 'paper') {
		result = 'You Lose -- Paper wraps Rock!'
		++compScore
		

	} else if (playerSelect === 'scissors' && computersChoice === 'rock') {
		result = 'You Lose -- Rock crushes Scissors!'
		++compScore
		
	}
}

let fiveRoundGame = () => {
    for (let i = 0; i < 5; i++) {
		playerSelect = prompt("Rock, Paper, or Scissors").toLowerCase()
		validateByFive()
	}
	evalScores(userScore, compScore)
	alert(finalScore)
	resetScores()
}

let evalScores = () => {
	if (userScore === 0 && compScore === 0) {
		finalScore = `There was an issue with the input.`
	} else if (compScore > userScore) {
		finalScore = `Shit, you fucking lost! The computer whooped your ass ${compScore} to ${userScore}.`
	} else if (compScore < userScore) {
		finalScore = `Congrats, you won! You beat the computer ${userScore} to ${compScore}.`
	} else {
		finalScore = `Fuck, this is annoying, it's a goddamned fucking tie.`
	}
}

let resetScores = () => {
	userScore = 0
	compScore = 0
	finalScore = ''
}

btn.addEventListener('click', userChoice);
btn2.addEventListener('click', fiveRoundGame);