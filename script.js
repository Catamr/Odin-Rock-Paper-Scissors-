let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
   c = Math.floor(Math.random() * 3) + 1;  
   return c 
}

function getHumanChoice(humanChoice){
    i = prompt("Rock Paper Scissors!", "enter input");  
  
    if (i == "rock"){
        r = 1
    } else if (i == "paper"){
        r = 2
    } else {
        r = 3
    }
    return r
}

function playRound(){
    c = getComputerChoice();
    p = getHumanChoice(); 

   if (c == p) {
    return "draw" 
   } else if (c == 1 && p == 2) {
    humanScore += 1 
    return "player wins"
   } else if (c == 2 && p == 3) {
    humanScore += 1 
    return "player wins"
   } else if (c == 3 && p ==1) {
    humanScore += 1 
    return "Player wins"
   } else {
    computerScore += 1 
    return "computer wins"
   }
}

function playGame(matchResult){ 
    for (let i = 0; i < 5; i++){
        playRound(); 
    } 
    console.log("player scored: " + humanScore)
    console.log("computer scored: " + computerScore)
    if (humanScore > computerScore){
        return "Player Wins!!!!"
    } else if (humanScore == computerScore) {
        return "Draw"
    } else {
        return "Computer Wins!!!!"
    }
}

let play = playGame();
console.log (play);
