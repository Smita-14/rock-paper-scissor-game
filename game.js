const item = ['Rock', 'Paper', 'Scissors']
let playerScore = 0, compScore = 0

function computerPlay(item) {
    let randomIndex = Math.floor(Math.random() * item.length)
    return item[randomIndex]
}

function score(scoredBy) {
    if (scoredBy == 'player') {
        playerScore += 1
        userH2.textContent = 'Player : ' + playerScore
    }
    else if (scoredBy == 'comp') {
        compScore += 1
        compH2.textContent = 'Computer : ' + compScore
    }
    if (playerScore == 5 || compScore == 5) {
        finalScore()
    }    
}

function restartButton() {
    restartBtn.classList.toggle('restart-visibility')
}

function finalScore() {
    if (playerScore == 5) {
        resultH1.textContent = 'YOU'
    }
    else if (compScore == 5) {
        resultH1.textContent = 'COMPUTER'
    }

    resultH2.textContent = 'WIN THIS GAME'

    buttonPaper.disabled = true
    buttonPaper.classList.toggle('btn-disabled')
    
    buttonRock.disabled = true
    buttonRock.classList.toggle('btn-disabled')
    
    buttonScissors.disabled = true
    buttonScissors.classList.toggle('btn-disabled')

    restartButton()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        if (resultH1.textContent.includes('TIE')) {
            resultH1.textContent = resultH1.textContent += '!'
        }
        else {
            resultH1.textContent = 'TIE'
        }

        resultH2.textContent = playerSelection + ' Can\'t beat ' + computerSelection
    }

    else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        resultH1.textContent = 'YOU WIN!'
        resultH2.textContent = playerSelection + ' beats ' + computerSelection
        score('player')
    } 
    
    else {
        resultH1.textContent = 'COMPUTER WIN!'
        resultH2.textContent = computerSelection + ' beats ' + playerSelection
        score('comp')
    }
}

function toggleTheme () {
    document.body.classList.toggle('light-mode')

    if(document.body.classList.contains('light-mode')) {
        themeMode.src = './images/sun.png'
    }
    else {
        themeMode.src = './images/moon.png'
    }
}

let themeMode = document.querySelector('#theme-mode')
let buttonRock = document.querySelector('#rock')
let buttonPaper = document.querySelector('#paper')
let buttonScissors = document.querySelector('#scissors')
let restartBtn = document.querySelector('.restart-button')
let resultH1 = document.querySelector('.result-1')
let resultH2 = document.querySelector('.result-2')
let userH2 = document.querySelector('.user-score')
let compH2 = document.querySelector('.comp-score')

themeMode.addEventListener('click', toggleTheme)

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
    compH2.textContent = 'Computer : 0'

    playerScore = 0
    compScore = 0

    restartButton()
})
