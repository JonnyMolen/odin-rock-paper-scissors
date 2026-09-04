console.log("Rock Paper Scissors Game");

// Write logic for computer choice
    // write a function that randomly returns “rock”, “paper” or “scissors”
    function getComputerChoice() {
        //possible choces
        const choices = ["rock", "paper", "scissors"];
        //random index
        const randomIndex = Math.floor(Math.random() * choices.length);

        //return random choice
        return choices[randomIndex];
    }

    // Example usage:
    const computerChoice = getComputerChoice();
    console.log("Computer choice:", computerChoice);


// Write logic for user choice
    function getUserChoice() {
        let userChoice = prompt("Enter rock, paper, or scissors:");
        userChoice = userChoice.toLowerCase();

        while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
            userChoice = userChoice.toLowerCase();
        }
        return userChoice;
        
    }

    // Example usage:
    const userChoice = getUserChoice();
    console.log("User choice:", userChoice);


// Declare player score and computer score
    let playerScore = 0;
    let computerScore = 0;

// Logic for one round of the game
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return 'It\'s a tie! Both chose ' + playerSelection + '.';
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }

    // Example usage:
    const result = playRound(userChoice, computerChoice);
    console.log(result);
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

// Logic for playing multiple rounds
    function game() {
        for (let i = 0; i < 5; i++) {
            const roundCount = i;
            const userChoice = getUserChoice();
            const computerChoice = getComputerChoice();
            const result = playRound(userChoice, computerChoice);
            console.log(result);
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
            console.log(`Round ${roundCount} completed.`);
        }

        if (playerScore > computerScore) {
            console.log("Congratulations! You won the game!");
        } else if (playerScore < computerScore) {
            console.log("Sorry! You lost the game.");
        } else {
            console.log("The game is a tie!");
        }
    }

    // Start the game
    game();  
