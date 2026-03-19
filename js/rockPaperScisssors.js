function getHumanChoice() {
    // function returns humans choice
    // create a variable to store user input
    let userInput;
    // give user a choice store in userInput
    userInput = prompt('Choose: rock, paper or scissors? ').toLowerCase();
    return userInput;
}

function getComputerChoice(){
    // functions returns computers choice
    // create variable to store computers options
    let computerOptions = ["rock","paper","scissors"];
    // computer randomly selects a value
    let i = Math.floor(Math.random() * computerOptions.length);
    let computerChoice = computerOptions[i];
    return computerChoice;
}
 // create variable to score userScore
 let humanScore = 0;
 // create a variable to store computers score
 let computerScore = 0;
 
 function playRound (humanChoice,computerChoice) {
// Compare users value & computers value 
if (humanChoice === computerChoice) {
    return "Draw";
} else if (humanChoice ==="rock" && computerChoice === "scissors") {
    ++humanScore;
    return "You Win!";
} else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    return "You Win!";
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    ++humanScore;
    return "You Win!";
} else { 
    ++computerScore;
    return "You Lose";
}
 }

 console.log(playRound(getComputerChoice(),getHumanChoice()));
 console.log(`Computer: ${computerScore}`);
 console.log(`Human: ${humanScore}`);