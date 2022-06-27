let playerSelect = ''
let computersChoice = ''
let result = ''
let userScore = 0
let compScore = 0
let finalScore = ''

const playerOutput = document.querySelector('.player-score')
const computerOutput = document.querySelector('.computer-score')
const final = document.querySelector('.final-score')

const playerScoreOutput = document.createElement('p')
const computerScoreOutput = document.createElement('p')
const finalOutput = document.createElement('p')

const rockSelect = document.querySelector('#btn-rock')
const paperSelect = document.querySelector('#btn-paper')
const scissorsSelect = document.querySelector('#btn-scissors')
const playAgain = document.querySelector('#play-again')

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
		rockSelect.removeEventListener('click', rock)
		paperSelect.removeEventListener('click', paper)
		scissorsSelect.removeEventListener('click', scissors)
		console.log(finalScore)

	} else if (userScore === 5 || compScore === 5 && compScore > userScore) {
		finalScore = `That's game -- the computer beat you ${compScore} to ${userScore}`
		rockSelect.removeEventListener('click', rock)
		paperSelect.removeEventListener('click', paper)
		scissorsSelect.removeEventListener('click', scissors)
		console.log(finalScore)

	} else if (userScore === 5 || compScore === 5 && compScore === userScore) {
		finalScore = `That's a shame -- it's a tie. You should play again!`
		rockSelect.removeEventListener('click', rock)
		paperSelect.removeEventListener('click', paper)
		scissorsSelect.removeEventListener('click', scissors)
		console.log(finalScore)
	}
}

let resetScores = () => {
	userScore = 0
	compScore = 0
	finalScore = ''
	// playerOutput.removeChild(p)
	// computerOutput.removeChild(p)
	// final.removeChild(p)

}

// btn.addEventListener('click', userChoice)
// btn2.addEventListener('click', fiveRoundGame)

rockSelect.addEventListener('click', rock)
paperSelect.addEventListener('click', paper)
scissorsSelect.addEventListener('click', scissors)
playAgain.addEventListener('click', resetScores)




//To be deleted:

// let validateInput = () => {
// 	if (playerSelect === null || playerSelect === '') {
// 		return 
// 	} else if (playerSelect === 'scissors' || playerSelect === 'paper' || playerSelect === 'rock') {
// 		playerSelect.toLowerCase()
// 		computerPlay()
// 		compare(playerSelect, computersChoice)
// 		alert(result)
// 	} else {
// 		alert("You fucked up the input!")
// 		playerSelect = prompt("Rock, Paper, or scissors").toLowerCase()
// 		validateInput()
// 	}
// }

// let validateByFive = () => {
// 	if (playerSelect === null || playerSelect === '') {
// 		return
// 	} else if (playerSelect === 'scissors' || playerSelect === 'paper' || playerSelect === 'rock') {
// 		computerPlay()
// 		compare(playerSelect, computersChoice)
// 	} else {
// 		alert("You fucked up the input!")
// 	}
// }

// let fiveRoundGame = () => {
//     for (let i = 0; i < 5; i++) {
// 		playerSelect = prompt("Rock, Paper, or Scissors").toLowerCase()
// 		validateByFive()
// 	}
// 	evalScores(userScore, compScore)
// 	alert(finalScore)
// 	resetScores()
// }

// let evalScores = () => {
// 	if (userScore === 0 && compScore === 0) {
// 		finalScore = `There was an issue with the input.`
// 	} else if (compScore > userScore) {
// 		finalScore = `Shit, you fucking lost! The computer whooped your ass ${compScore} to ${userScore}.`
// 	} else if (compScore < userScore) {
// 		finalScore = `Congrats, you won! You beat the computer ${userScore} to ${compScore}.`
// 	} else {
// 		finalScore = `Fuck, this is annoying, it's a goddamned fucking tie.`
// 	}
// }