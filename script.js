/* Initialize variables */

let playerSelect = ''
let computersChoice = ''
let result = ''
let userScore = 0
let compScore = 0
let finalScore = ''

/* Get divs for displaying/removing visual feedback */

const playerOutput = document.querySelector('.player-score')
const computerOutput = document.querySelector('.computer-score')
const final = document.querySelector('.final-score')
const resultsDisplay = document.querySelector('.result-box')

/* Get elements for event listeners */

const rockSelect = document.querySelector('#btn-rock')
const paperSelect = document.querySelector('#btn-paper')
const scissorsSelect = document.querySelector('#btn-scissors')
const playAgain = document.querySelector('#play-again')

/* Append visual feedback and results */

const playerScoreOutput = document.createElement('p')
const computerScoreOutput = document.createElement('p')
const finalOutput = document.createElement('p')

/* Remove visual feedback and results */

let removeResults = () => {
	playerOutput.removeChild(playerOutput.lastElementChild)
	computerOutput.removeChild(computerOutput.lastElementChild)
	final.removeChild(final.lastElementChild)
}

let rock = () => {
	playerSelect = 'rock'
	console.log(playerSelect)
	computerPlay()
	compare(playerSelect, computersChoice)
	console.log(result)
	playerOutput.appendChild(playerScoreOutput).textContent = `${userScore}`
	computerOutput.appendChild(computerScoreOutput).textContent = `${compScore}`
	evalScores()
	final.appendChild(finalOutput).textContent = `${finalScore}`
}

let paper = () => {
	playerSelect = 'paper'
	console.log(playerSelect)
	computerPlay()
	compare(playerSelect, computersChoice)
	console.log(result)
	playerOutput.appendChild(playerScoreOutput).textContent = `${userScore}`
	computerOutput.appendChild(computerScoreOutput).textContent = `${compScore}`
	evalScores()
	final.appendChild(finalOutput).textContent = `${finalScore}`
}

let scissors = () => {
	playerSelect = 'scissors'
	console.log(playerSelect)
	computerPlay()
	compare(playerSelect, computersChoice)
	console.log(result)
	playerOutput.appendChild(playerScoreOutput).textContent = `${userScore}`
	computerOutput.appendChild(computerScoreOutput).textContent = `${compScore}`
	evalScores()
	final.appendChild(finalOutput).textContent = `${finalScore}`
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
	if (playerSelect === computersChoice) {
		result = 'This is a Tie -- go again!'

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

let evalScores = () => {
	if (userScore === 5 || compScore === 5 && userScore > compScore) {
		finalScore = `That's game -- you beat the computer ${userScore} to ${compScore}`
		removeListeners()
		console.log(finalScore)

	} else if (userScore === 5 || compScore === 5 && compScore > userScore) {
		finalScore = `That's game -- the computer beat you ${compScore} to ${userScore}`
		removeListeners()
		console.log(finalScore)

	} else if (userScore === 5 || compScore === 5 && compScore === userScore) {
		finalScore = `That's a shame -- it's a tie. You should play again!`
		removeListeners()
		console.log(finalScore)
	}
}

let resetScores = () => {
	userScore = 0
	compScore = 0
	finalScore = ''
	addListeners()
	removeResults()
}

let removeListeners = () => {
	rockSelect.removeEventListener('click', rock)
	paperSelect.removeEventListener('click', paper)
	scissorsSelect.removeEventListener('click', scissors)
}

let addListeners = () => {
	rockSelect.addEventListener('click', rock)
	paperSelect.addEventListener('click', paper)
	scissorsSelect.addEventListener('click', scissors)
}

rockSelect.addEventListener('click', rock)
paperSelect.addEventListener('click', paper)
scissorsSelect.addEventListener('click', scissors)
playAgain.addEventListener('click', resetScores)