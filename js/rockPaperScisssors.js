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
function roundWinner (outcome) {
    if (outcome === "HUMAN") {
        humanScore ++;
        roundOutcome.textContent = `User wins +1 point to User`;
        resultDiv.appendChild(roundOutcome)
    } else if (outcome === "COMPUTER") {
        computerScore ++;
       roundOutcome.textContent = 'Computer wins +1 point to Computer';
       resultDiv.appendChild(roundOutcome);
    } else {
        roundOutcome.textContent = "It's a Draw no points given";
        resultDiv.appendChild(roundOutcome);
    }
};

function checkWinner(){
    if (humanScore >= 5) {
        roundOutcome.textContent = "The user has won the Game!";
        resultDiv.appendChild(roundOutcome);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        roundOutcome.textContent = "The computer has won the Game!";
        resultDiv.appendChild(roundOutcome);
        humanScore = 0;
        computerScore = 0;
    }
};

function updateDisplay() {
    humanDisplayedScore.textContent = `Human: ${humanScore}`;
    computerDisplayedScore.textContent = `Computer: ${computerScore}`;
}
const resultDiv = document.querySelector('.results')
const userChoiceRock = document.querySelector(".rock");
userChoiceRock.addEventListener('click',() => {
   const result = playRound('rock',getComputerChoice());
   roundWinner(result);
   updateDisplay();
   checkWinner();
});

const userChoicePaper = document.querySelector('.paper');
userChoicePaper.addEventListener('click', () => {
    const result = playRound('paper',getComputerChoice());
    roundWinner(result);
    updateDisplay();
    checkWinner();
});

const userChoiceScissors = document.querySelector('.scissors');
userChoiceScissors.addEventListener('click', () => {
    const result = playRound('scissors',getComputerChoice());
    roundWinner(result);
    updateDisplay()
    checkWinner();
})

const computerDisplayedScore = document.createElement('p');
const humanDisplayedScore = document.createElement('p');
const roundOutcome = document.createElement('p');
resultDiv.appendChild(computerDisplayedScore);
resultDiv.appendChild(humanDisplayedScore);


   
    
    