// FUNCTION getComputerChoice ()
function getComputerChoice () {
    // returns the computers choice randomly selected
        // SET computerOptions as [rock,paper,scissors]
        const computerOptions = ['rock','paper','scissors'];
        //INITIALIZE variable computerChoice
        let computerChoice;
        //RAND SELECT computerOPtions,SET computerChoice
        let i = Math.floor(Math.random() * computerOptions.length);
        computerChoice =  computerOptions[i];
        // RETURN computerChoice
        return computerChoice;
// END FUNCTION
}
//INITIALIZE humanScore = 0
let humanScore = 0;
//INITIALIZE computerScore = 0
let computerScore = 0;
//FUNCTION playRound(humanChoice, computerChoice)
function playRound(humanChoice, computerChoice){
    //IF humanChoice == computerChoice THEN
    if (humanChoice === computerChoice) {
        //RETURN "DRAW"
        return "DRAW";
    }
    //ELSE IF humanChoice == "rock" AND computerChoice == "scissors" THEN
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        //RETURN "HUMAN"
        return "HUMAN";
    }
    //ELSE IF humanChoice == "paper" AND computerChoice == "rock" THEN
    else if (humanChoice === "paper" && computerChoice === "rock"){
        // RETURN "HUMAN"
        return "HUMAN";
    }
    //ELSE IF humanChoice == "scissors" AND computerChoice == "paper" THEN
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        //RETURN "HUMAN"
        return "HUMAN";
    }
    //ELSE
    else {
        //RETURN "COMPUTER"
        return "COMPUTER";
    //END IF
    }
//END FUNCTION
};
function winner (outcome) {
    if (outcome === "HUMAN") {
        humanScore ++;
    } else if (outcome === "COMPUTER") {
        computerScore ++;
    }
}
function updateDisplay() {
    humanDisplayedScore.textContent = `Human: ${humanScore}`;
    computerDisplayedScore.textContent = `Computer: ${computerScore}`;
}
const resultDiv = document.querySelector('.results')
const userChoiceRock = document.querySelector(".rock");
userChoiceRock.addEventListener('click',() => {
   const result = playRound('rock',getComputerChoice());
   winner(result);
   updateDisplay();
});

const userChoicePaper = document.querySelector('.paper');
userChoicePaper.addEventListener('click', () => {
    const result = playRound('paper',getComputerChoice());
    winner(result);
    updateDisplay();
});

const userChoiceScissors = document.querySelector('.scissors');
userChoiceScissors.addEventListener('click', () => {
    const result = playRound('scissors',getComputerChoice());
    winner(result);
    updateDisplay()
})

const computerDisplayedScore = document.createElement('p');
const humanDisplayedScore = document.createElement('p');
resultDiv.appendChild(computerDisplayedScore);
resultDiv.appendChild(humanDisplayedScore);


   
    
    