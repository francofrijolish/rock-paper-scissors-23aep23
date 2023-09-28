let playerSelection;
let playerPoints = 0;
let computerPoints = 0;
const imgPlayer = document.getElementById('imgPlayerSelection');
const imgComputer = document.getElementById('imgComputerSelection');
const resultRound = document.getElementById('resultRound');
const resultGame = document.getElementById('resultGame');

const selectionRock = document.getElementById('boton1');
selectionRock.addEventListener('click', () => {
    playerSelection = 'Rock';
    imgPlayer.classList.remove('scissors', 'paper');
    imgPlayer.classList.add('rock');
    gameLoop();
    console.log(imgComputer);
});

const selectionPaper = document.getElementById('boton2');
selectionPaper.addEventListener('click', () => {
    playerSelection = 'Paper';
    imgPlayer.classList.remove('rock', 'scissors');
    imgPlayer.classList.add('paper');
    gameLoop();
});

const selectionScissors = document.getElementById('boton3');
selectionScissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    imgPlayer.classList.remove('rock', 'paper');
    imgPlayer.classList.add('scissors');
    gameLoop();
});

function getComputerChoice() {
    const cPselection = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * cPselection.length);

    if(cPselection[random] === 'Scissors'){
        imgComputer.classList.remove('rock', 'paper');
        imgComputer.classList.add('scissors');
    }else if(cPselection[random] === 'Paper'){
        imgComputer.classList.remove('rock', 'scissors');
        imgComputer.classList.add('paper');
    }else if(cPselection[random] === 'Rock'){
        imgComputer.classList.remove('scissors', 'paper');
        imgComputer.classList.add('rock');
    };
    return cPselection[random];
}

function game() {
    const computerSelection = getComputerChoice();

    function playRound(playerselection, computerselection) {
        if (playerSelection === computerSelection) {
            resultRound.innerHTML = (`tie! ${playerSelection}is equal than ${computerselection}`);
        } else if (
            (playerSelection === 'Scissors' && computerSelection === 'Paper')
            ||
            (playerSelection === 'Paper' && computerSelection === 'Rock')
            ||
            (playerSelection === 'Rock' && computerSelection === 'Scisors')) {
            playerPoints++;
            resultRound.innerHTML = (`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            computerPoints++;
            resultRound.innerHTML = (`You lose! ${playerSelection} beats ${computerSelection}`)
        }
    }
    playRound(playerSelection, computerSelection);
}

function gameLoop() {
            
    if (playerPoints > 4) {
        resultGame.classList.add('gameWin')
        resultGame.innerHTML = (`Congratulations, you win haved ${playerPoints} and computer haved ${computerPoints}`);
        return score;
    }if (computerPoints > 4) {
            resultGame.classList.add('gameOver')
            resultGame.innerHTML = (`Game over, you lose, haved ${playerPoints} and computer haved ${computerPoints}`);
            return score;
    }
    const score = document.getElementById('score');
    score.innerHTML = `player = ${playerPoints} computer = ${computerPoints}`;
    game();
}
