console.log("Hello World")

// Write log for computer choice
    // write a function that randomly returns “rock”, “paper” or “scissors”

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Example usage:
    const computerChoice = getComputerChoice();
    console.log("Computer choice:", computerChoice);
    