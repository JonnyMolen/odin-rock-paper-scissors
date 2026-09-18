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

// Write logic for user choice
    // function getUserChoice() {
    //     const rockButton = document.getElementById("rock");
    //     const paperButton = document.getElementById("paper");
    //     const scissorsButton = document.getElementById("scissors");   
        
    //     let userChoice = "";
        
    //     rockButton.addEventListener("click", () => {
    //         userChoice = "rock";
    //         console.log("User choice:", userChoice);
    //     });
        
    //     paperButton.addEventListener("click", () => {
    //         userChoice = "paper";
    //         console.log("User choice:", userChoice);
    //     });
        
    //     scissorsButton.addEventListener("click", () => {
    //         userChoice = "scissors";
    //         console.log("User choice:", userChoice);
    //     });

    //     return userChoice;
    // }

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


// Logic for playing multiple rounds
    function game() {
        //add event listener to call playRound when user clicks a button
        const rockButton = document.getElementById("rock");
        const paperButton = document.getElementById("paper");
        const scissorsButton = document.getElementById("scissors");
        const resultDiv = document.getElementById("result");

        rockButton.addEventListener("click", () => {
            //Click "rock" → the rockButton listener runs → playRound runs → playerScore becomes 1 
            const computerSelection = getComputerChoice();
            const result = playRound("rock", computerSelection);
            
            // resultDiv updates. The listener callback ends.
            resultDiv.textContent = result;

            document.getElementById("player-score").textContent = playerScore;
            document.getElementById("computer-score").textContent = computerScore;
            
                // Check for game over condition
                //update the resultDiv to show the final result
                if (playerScore == 5 || computerScore == 5) {
                    if (playerScore > computerScore) {
                        resultDiv.textContent = "Congratulations! You won the game!";
                    } else {
                        resultDiv.textContent = "Game over! The computer won the game!";
                }
            }
        });

        paperButton.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            const result = playRound("paper", computerSelection);
            resultDiv.textContent = result;

            document.getElementById("player-score").textContent = playerScore;
            document.getElementById("computer-score").textContent = computerScore;
                // Check for game over condition
                if (playerScore == 5 || computerScore == 5) {
                    if (playerScore > computerScore) {
                        resultDiv.textContent = "Congratulations! You won the game!";
                    } else {
                        resultDiv.textContent = "Game over! The computer won the game!";
                }
            }
        });

        scissorsButton.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            const result = playRound("scissors", computerSelection);
            resultDiv.textContent = result;

            document.getElementById("player-score").textContent = playerScore;
            document.getElementById("computer-score").textContent = computerScore;
                    
                // Check for game over condition
                if (playerScore == 5 || computerScore == 5) {
                    if (playerScore > computerScore) {
                        resultDiv.textContent = "Congratulations! You won the game!";
                    } else {
                        resultDiv.textContent = "Game over! The computer won the game!";
                }
            }
        });
}

    game();  


