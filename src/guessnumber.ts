function guessTheNumber(secretNumber: number, guess: number): string {
    if (guess === secretNumber) {
        return "Congratulations! You guessed the correct number.";
    } else if (guess < secretNumber) {
        return "Try a higher number.";
    } else {
        return "Try a lower number.";
    }
}

const secretNumber = Math.floor(Math.random() * 100) + 1;
const userGuess = 42; 
console.log(guessTheNumber(secretNumber, userGuess));