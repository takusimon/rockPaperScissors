// create a variable to store user input
let userInput;
// give user a choice store in userInput
userInput = "paper";//prompt('Choose: rock, paper or scissors? ').toLowerCase();
// create variable to store computers options
let computerOptions = ["rock","paper","scissors"];
// computer randomly selects a value
let i = Math.floor(Math.random() * computerOptions.length);
let computerChoice = computerOptions[i];
// Compare users value & computers value 
if (userInput === computerChoice) {
    console.log("Draw");
} else if (userInput ==="rock" && computerChoice === "paper") {
    console.log("You Win!");
} else if (userInput === "paper" && computerChoice === "rock") {
    console.log("You Win");
} else if (userInput === "scissors" && computerChoice === "paper") {
    console.log("You Win");
} else { 
    console.log("You Lose");
}