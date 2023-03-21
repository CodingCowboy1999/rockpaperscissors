let playerScore = 0
let computerScore = 0
const ROCK = 'Rock'
const PAPER = 'Paper'
const SCISSORS = 'Scissors'


function game() {
       for (let i = 0; i < 5; i++) {
        console.log(`Round ${i}:`)
        let playerSelection = prompt('Enter your choice (ROCK, PAPER, or SCISSORS)')
        let computerSelection = getRandomChoice()
        playRound(playerSelection.toUpperCase(), computerSelection)
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        if (isGameOver()) {
            console.log(`Game Over! ${getWinner()} wins!`)
        }
    }
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            roundWinner = 'Tie'
            break 
        case playerSelection === ROCK && computerSelection === SCISSORS:
        case playerSelection === PAPER && computerSelection === ROCK:
        case playerSelection === SCISSORS && computerSelection === PAPER:
             playerScore++
             roundWinner = 'User'
            break
        case computerSelection === ROCK && playerSelection === SCISSORS:
        case computerSelection === PAPER && playerSelection === ROCK:
        case computerSelection === SCISSORS && playerSelection === PAPER:
             computerScore++
             roundWinner = 'Computer'
             break        
    }
}


function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return ROCK
        case 1:
            return PAPER
        case 2: 
            return SCISSORS
            break
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function getWinner() {
    if (playerScore > computerScore) {
    return 'User'
    }
    else if (computerScore > playerScore) {
    return 'Computer'
    }
    else { 
    return 'Tie'
    }
}
