const item = ['Rock', 'Paper', 'Scissors']
let playerScore = 0, compScore = 0

function computerPlay(item) {
    let randomIndex = Math.floor(Math.random() * item.length)
    return item[randomIndex]
}

function score(whoScored) {
    if (whoScored == 'player') {
        playerScore += 1
        userH2.textContent = 'Player : ' + playerScore
    }
    else if (whoScored == 'comp') {
        compScore += 1
        compH2.textContent = 'Computer : ' + compScore
    }
    if (playerScore == 5 || compScore == 5) {
        finalScore()
    }    
}

function restartButton() {
    restartBtn.classList.toggle('restart')
}

function finalScore() {
    if (playerScore == 5) {
        resultH1.textContent = 'FINAL WINNER: YOU'
    }
    else if (compScore == 5) {
        resultH1.textContent = 'FINAL WINNER: COMPUTER'
    }

    resultH2.textContent = '\uD83D\uDE00'

    buttonPaper.disabled = true
    buttonPaper.classList.toggle('btn-disabled')
    
    buttonRock.disabled = true
    buttonRock.classList.toggle('btn-disabled')
    
    buttonScissors.disabled = true
    buttonScissors.classList.toggle('btn-disabled')

    restartButton()
}

function playRound(playerSelection, computerSelection) {
    divResult.parentElement.classList.remove('hidden')
    if (playerSelection == computerSelection) {
        resultH1.textContent = 'TIE'
        resultH2.textContent = playerSelection + ' Can\'t beat ' + computerSelection
        divResult.appendChild(resultH1)
        divResult.appendChild(resultH2)
    }

    else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        resultH1.textContent = 'YOU WIN!'
        resultH2.textContent = playerSelection + ' beats ' + computerSelection
        divResult.appendChild(resultH1)
        divResult.appendChild(resultH2)
        score('player')
    } 
    
    else {
        resultH1.textContent = 'COMPUTER WIN!'
        resultH2.textContent = computerSelection + ' beats ' + playerSelection
        divResult.appendChild(resultH1)
        divResult.appendChild(resultH2)
        score('comp')
    }
}

let divHidden = document.querySelector('div.hidden')
let buttonRock = document.querySelector('#btn-1')
let buttonPaper = document.querySelector('#btn-2')
let buttonScissors = document.querySelector('#btn-3')
let divResult = document.querySelector('.result')
let resultH1 = document.createElement('H1')
let resultH2 = document.createElement('H2')
let userH2 = document.querySelector('.user-score')
let compH2 = document.querySelector('.comp-score')
let restartBtn = document.querySelector('.restart')

resultH2.style.marginTop = '0'

buttonRock.addEventListener('click', () => {
    playRound(buttonRock.textContent, computerPlay(item))
})

buttonPaper.addEventListener('click', () => {
    playRound(buttonPaper.textContent, computerPlay(item))
})

buttonScissors.addEventListener('click', () => {
    playRound(buttonScissors.textContent, computerPlay(item))
})

restartBtn.addEventListener('click', () => {
    buttonPaper.disabled = false
    buttonPaper.classList.toggle('btn-disabled')
    buttonRock.disabled = false
    buttonRock.classList.toggle('btn-disabled')
    buttonScissors.disabled = false
    buttonScissors.classList.toggle('btn-disabled')

    resultH1.textContent = ''
    resultH2.textContent = ''
    userH2.textContent = 'Player : 0'
    compH2.textContent = 'Comp : 0'

    playerScore = 0
    compScore = 0

    restartButton()
})
