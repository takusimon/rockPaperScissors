// FUNCTION getHumanChoice ()
    //asks the users for their choice and then return that choice
        //INITIALIZE varChoice
        //GET choice (rock,paper,scissors),SET varChoice
        //RETURN varChoice
// END FUNCTION

// FUNCTION getComputerChoice ()
    // returns the computers choice randomly selected
        // SET computerOptions as [rock,paper,scissors]
        //INITIALIZE variable computerChoice
        //RAND SELECT computerOPtions,SET computerChoice 
        // RETURN computerChoice
// END FUNCTION

// FUNCTION playGame (rounds)
    //INITIALIZE humanScore = 0
    //INITIALIZE computerScore = 0
    //FUNCTION playRound(humanChoice, computerChoice)
        //IF humanChoice == computerChoice THEN
            //PRINT "Draw"
        //ELSE IF humanChoice == "rock" AND computerChoice == "scissors" THEN
            // humanScore ++
            //PRINT "User wins this round"
        //ELSE IF humanChoice == "paper" AND computerChoice == "rock" THEN
            // humanScore ++
            //PRINT "User wins this round"
        //ELSE IF humanChoice == "scissors" AND computerChoice == "paper" THEN
            // humanScore ++
            //PRINT "User wins this round"
        //ELSE
            //computerScore ++
            //PRINT "Computer wins this round"
        //END IF
    //END FUNCTION

    //FOR I <= rounds
        //SET humanChoice = CALL getHumanChoice()
        //SET computerChoice = CALL getComputer()
        //CALL playRound(humanChoice,computerChoice)
    //END FOR

    // IF humanScore == computerScore THEN
        //PRINT "It's a Draw no winner"
    // ELSE IF humanScore > computerScore THEN
        //PRINT "USER wins!"
    //ELSE
        //PRINT "Computer wins!"
    //END IF
//END FUNCTION

//CALL playRound(x)



   
    
    