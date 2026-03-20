// FUNCTION getHumanChoice ()
function getHumanChoice () {
    //asks the users for their choice and then return that choice
        //INITIALIZE userChoice
        let userChoice;
        //GET choice (rock,paper,scissors),SET userChoice
        userChoice = prompt('Enter rock,paper or scissors: ').toLowerCase();
        //RETURN userChoice
        return userChoice;
// END FUNCTION
}
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
// FUNCTION playGame (rounds)
function playGame (rounds) {
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
    }

    //FOR i FROM 1 TO rounds
    for (let i = 1; i <= rounds;i++) {
        //SET humanChoice = CALL getHumanChoice()
        const humanChoice = getHumanChoice();
        //SET computerChoice = CALL getComputerChoice()
        const computerChoice = getComputerChoice()
        //INITIALIZE result = CALL playRound(humanChoice,computerChoice)
        let result = playRound(humanChoice,computerChoice);
        //IF result == "HUMAN" THEN
        if (result === "HUMAN") {
            //humanScore ++
            humanScore++;
        }
        //ELSE IF result == "COMPUTER" THEN
        else if (result === "COMPUTER"){
            //computerScore ++
            computerScore++;
        }
        //END IF
    //END FOR
    }

    // IF humanScore == computerScore THEN
    if (humanScore === computerScore){
        //PRINT "It's a Draw no winner"
        console.log("It's a Draw");
    }
    // ELSE IF humanScore > computerScore THEN
    else if (humanScore > computerScore){
        //PRINT "USER wins!"
        console.log("User wins!");
    }
    //ELSE
    else {
        //PRINT "Computer wins!"
        console.log("Computer wins!");
    //END IF
    }
//END FUNCTION
}

//CALL playGame(x)
playGame(5);


   
    
    