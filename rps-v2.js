
document.getElementById('btn').addEventListener("click", function selectOption() {
 }​);

function selectOption() {
    let playerSelection = prompt("Rock, Paper, or Scissors");
    return playerSelection; 
}

let playersSelection = selectOption();

if (playersSelection === 'Scissors' || playersSelection === 'Paper' || playersSelection === 'Rock') {
    function computerPlay() {

        let computerChoice = Math.random();
    
        if (computerChoice <= 0.34) {
            return 'Scissors';
        } else if (computerChoice >= 0.35 && computerChoice <= 0.67) {
            return 'Paper';
        } else {
            return 'Rock';
        }
    }
}

let computersChoice = computerPlay();

if (typeof playersSelection !== 'undefined' && computersChoice !== 'undefined') {

    function compare(playersSelection, computersChoice) {

        if (computersChoice === 'Scissors' || computersChoice === 'Paper' || computersChoice === 'Rock') {
            if ( playersSelection === computersChoice ) {
                return 'This is a Tie -- go again!';

            } else if (playersSelection === 'Scissors' && computersChoice === 'Paper') {
                return 'Computer loses -- Scissors cut Paper!';

            } else if (playersSelection === 'Paper' && computersChoice === 'Rock') {
                return 'Computer Loses -- Paper wraps Rock!';

            } else if (playersSelection === 'Rock' && computersChoice === 'Scissors') {
                return 'Computer Loses -- Rock crushes Scissors!';

            } else if (playersSelection === 'Paper' && computersChoice === 'Scissors') {
                return 'You Lose -- Scissors cut Paper!';

            } else if (playersSelection === 'Rock' && computersChoice === 'Paper') {
                return 'You Lose -- Paper wraps Rock!';

            } else if (playersSelection === 'Scissors' && computersChoice === 'Rock') {
                return 'You Lose -- Rock crushes Scissors!';
            }
        }
    }
}

let gameResults = compare(playersSelection, computersChoice);

alert(gameResults);

console.log(compare(playersSelection, computersChoice));



