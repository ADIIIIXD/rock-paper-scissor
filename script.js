const playerinput = document.querySelector("#player");
const compinput = document.querySelector("#computer");
const game_result = document.querySelector("#result");
const choicebtns = document.querySelectorAll(".choicebtns");

let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer_turn();
    playerinput.textContent = `PLAYER: ${player}`;
    compinput.textContent = `COMPUTER: ${computer}`;
    game_result.textContent = `RESULT: ${checkwinner()}`;
}))

function computer_turn() {
    const choice = Math.floor(Math.random() * 3) + 1;
    
    switch(choice){
        case 1:
            computer = "ROCK";
            break
        case 2:
            computer = "PAPER";
            break
        case 3:
            computer = "SCISSORS";
            break
    }
}

function checkwinner() {
    if(computer == player) {
        return "Its a Draw!";
    }
    else if(computer == "ROCK") {
        return (player == "PAPER") ? "You Win!" : "You Lose!";
    }
    else if(computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Lose";
    }
    else if(computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win" : "You lose";
    }
}