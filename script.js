let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => {
    const randomInteger = Math.floor(Math.random()*10)
    console.log(randomInteger);
}
generateTarget();

// Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
// Return true if the human player wins, and false if the computer player wins.

compareGuesses = (user, computer, target) => {
 let userGuess = user - target;
 let computerGuess = computer - target;

 if (userGuess < 0) {
    userGuess * -1;
    console.log(userGuess);
 }

 if (computerGuess < 0) {
    computerGuess * -1;
    console.log(computerGuess);
 }

 if (userGuess < computerGuess) {
return true;
 } else {
     return false;
 }


}
compareGuesses();
console.log(compareGuesses());