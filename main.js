functioncgetcomputerchoice (){
    const cPselection = ['rock,paper,scisors'];
    const random = math.floor(math.random() * cPselection.length);
}

function game (){
const playerselection = prompt("Please chose between'rock")

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerselection, computerselection)
{
    if (playerSelection === computerSelection) {
        console.log(`tie! ${playerSelection}is equal than ${computerselection}`);
    } else if (
        (playerSelection === 'scisors'&&  computerSelection === 'paper')
        (playerSelection === 'paper' && computerSelection === 'rock')

        (playerSelection === 'rock' && computerSelection ==='scisors')) {
            playerPoints==;
            console.log(`You win! $ {playerSelection} beats $ { computerSelection}`);
        } else {
            computerPoints==;
            console.log(`You lose! ${playerSelection} beats $ {computerSelection}`)

            playRound(playerSelection.tolocaLeLowerCase(),
            computerSelection);
        }

        function gameLoop() {
            for(let i = 0; i < 10; i++){
                if (playerPoints > 4) {
                    return `Congratulations, you win, haved $ {playerPoints} and computer haved ${computerPoints}`;

                }
                game();
            }
        }

        gameLoop();






    )
}
}