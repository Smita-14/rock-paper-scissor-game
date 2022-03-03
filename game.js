const item = ['Rock', 'Paper', 'Scissors']

function computerPlay(item) {
    let randomIndex = Math.floor(Math.random() * item.length)
    return item[randomIndex]
}

function game() {
    let playerScore = 0, compScore = 0

    for(let i = 1; i <= 5; i++) {
        let playerSelection = prompt('What\'s your move?')
        let computerSelection = computerPlay(item);
        let result = playRound(playerSelection,computerSelection)
        console.log(result)
        if (result.includes('You')) {
            playerScore += 1
            console.log(playerScore)
        }
        else if (result.includes('Computer')) {
            compScore += 1
            console.log(compScore)
        }
    }

    if (playerScore > compScore) {
        console.log('Final winner: YOUUUUU!!')
    }
    else if (playerScore < compScore) {
        console.log('Final Winner: The Computer!')
    }
    else console.log('TIE! TIE AGAIN..')
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 'It\'s a tie. No score counted'
    }

    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        return 'You win!. ' + playerSelection + ' beats ' + computerSelection
    } 
    
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
        return 'You win!. ' + playerSelection + ' beats ' + computerSelection
    }

    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
        return 'You win!. ' + playerSelection + ' beats ' + computerSelection
    }

    else return 'Computer wins! ' + playerSelection + ' beats ' + computerSelection
}


game()
