let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerScore) {
    prompt("It's a tie!")
    roundWinner = 'Tie'
    }
    if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors')
    (playerSelection === 'Paper' && computerSelction === 'Rock')
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
    playerScore++
    roundWinner = 'Player'
    }
    if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Paper' && playerSelction === 'Rock') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')
    ) {
    computerScore++
    roundWinner = 'Terminator'
    }
    updateScoreMessage(roundWinner,playerSelection,computerSelection)
}
  function game(playRound) {
    for (let i = 0; i < 5; i++) {
       console.log
    }
  }
  for(let i = 0; i < 5; i++) {
    let playerScore = 0; playerScore < 5; playerScore++
    let computerScore = 0; computerScore < 5; computerScore++
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2: 
            return 'Scissors'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
