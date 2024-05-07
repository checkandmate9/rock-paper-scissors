const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
let playerWins = 0;
let computerWins = 0;
let gameOver = false;
let restartBtn = document.getElementById("restartBtn");

choiceBtns.forEach(button => button.addEventListener("click", () => {
    if(!gameOver){
    player = button.textContent;
    computerTurn();
    let result = checkWinner()
    if (result === "You Win!"){
        playerWins++
    }
    else if (result === "You Lose!"){
        computerWins++
    }
    playerText.textContent = `Player: ${player}, ${playerWins}`;
    computerText.textContent = `Computer: ${computer}, ${computerWins}`;
    resultText.textContent = result;
    if(playerWins === 3 || computerWins === 3) {
        gameOver = true;
        resultText.textContent = playerWins === 3 ? "Game Over! You Won!" : "Game Over! Computer Won!"
        restartBtn.style.visibility = "visible";
    }
    
  }
}));
restartBtn.style.visibility = "hidden";

restartBtn.addEventListener("click", () => {
    playerWins = 0;
    computerWins = 0;
    gameOver = false;
    playerText.textContent = "Player: ";
    computerText.textContent = "Computer: ";
    resultText.textContent = "Result: ";
    restartBtn.style.visibility = "hidden"; 
});



function computerTurn(){
    const randNum = Math.floor(Math.random()* 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
             break;    
        case 3:
            computer = "SCISSORS";
            break;
    }
    console.log(randNum);
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        return ( player == "PAPER") ? "You Win!" : "You Lose!"
    
    }
    else if(computer == "PAPER"){
        return ( player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        return ( player == "ROCK") ? "You Win!" : "You Lose!"
    }
}