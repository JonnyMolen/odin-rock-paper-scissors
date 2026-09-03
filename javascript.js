console.log("Hello World")

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


