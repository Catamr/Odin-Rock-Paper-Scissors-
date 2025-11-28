let humanScore = 0;
let computerScore = 0;
let round = 0;

const buttons = document.querySelectorAll("button");
const pScoreDisplay = document.getElementById('playerScore');
const cScoreDisplay = document.getElementById('computerScore');
const imgDisplay = document.getElementById('gameImage');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "rock"){
            playRound(1);
        } else if (button.id == "paper"){
            playRound(2);
        } else if (button.id == "scissors"){
            playRound(3);
        };
    });
});

function getComputerChoice() {
   c = Math.floor(Math.random() * 3) + 1;  
   return c 
}

function playRound(p){

    c = getComputerChoice()
    
    if (c == p) {
        imgDisplay.src = 'https://placehold.co/500x500/fde484/FFF/?text=Its+a+Draw'
    } else if (c == 1 && p == 2) {
        humanScore += 1
        imgDisplay.src = 'https://placehold.co/500x500/b7f6cd/FFF/?text=Player+Scored'
    } else if (c == 2 && p == 3) {
        humanScore += 1 
        imgDisplay.src = 'https://placehold.co/500x500/b7f6cd/FFF/?text=Player+Scored'
    } else if (c == 3 && p ==1) {
        humanScore += 1 
        imgDisplay.src = 'https://placehold.co/500x500/b7f6cd/FFF/?text=Player+Scored'
    } else{
        computerScore += 1 
        imgDisplay.src = 'https://placehold.co/500x500/b7f6cd/FFF/?text=Computer+Scored'
    }

    if (computerScore >= 5){
        gameOver("Computer Wins");
    } else if (humanScore >= 5){
        gameOver("Player wins!!!");
    } else {
        pScoreDisplay.innerText = humanScore;
        cScoreDisplay.innerText = computerScore;
        return
    }

}

function gameOver(winner){
    humanScore = 0
    computerScore = 0
    pScoreDisplay.innerText = humanScore;
    cScoreDisplay.innerText = computerScore;
    alert(winner);

}


