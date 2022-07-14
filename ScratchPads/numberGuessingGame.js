let prompt = require("prompt-sync")();

// code below (replace this example)
const SetUpGame = () => {
  console.log(`Number Guesser v1.1 Professional`);
  console.log(`type '.exit' to exit early`);
  while (true){
    const scalar = playerInputNumber("Set Range 0 to ");
    const randomNumber = Math.floor(Math.random() * scalar);
    return { setPoint: randomNumber, max: scalar};
  }
}
const playGame = (randomNumber) => {
  let attempts = 1;
  let previousGuess = 0;
  while (true) {
    const guess = playerInputNumber("Guess a number: ");
    if (guess === randomNumber.setPoint)
      return attempts;
    else if (guess === previousGuess){
      console.log("Already Guessed!");
      attempts--;
      continue;
    }
    else if (guess > randomNumber.max)
      console.log("Above the max point! Try Again!");
    else if (guess > randomNumber.setPoint)
      console.log("Too High!");
    else if (guess < randomNumber.setPoint)
      console.log("Too Low!");
    previousGuess = guess;
    attempts++;
  }
}
const playerInputNumber = (promptText) => {
  while (true) {
    const guess = prompt(promptText);
    if (guess * 1)
      return guess * 1;
    else if (guess === ".exit")
      process.exit(0);
    else
      console.log("Not a number! Try Again!");
  }
}

// Setup the game
const randomNumber = SetUpGame();
// Play the game
const attempts = playGame(randomNumber);
// Congratulate the player
console.log(`You got it! You took ${attempts} attempts!`);