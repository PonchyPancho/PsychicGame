//Variables for game play
var winCount = 1;
var lossCount = 1;
var guessesRemaining = 10;
var guessedLetters = [];

// Array for computer to choose from
var alphabet =
    ["a","b","c"];

// Set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

// Event listener for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;
  // Make sure the user selects a value a-c
  var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }
    else {
      console.log(userChoice);
    }
    // Reset computer choice if the user loses
    if (guessesRemaining <= 0) {
      document.getElementById("lossCount").innerHTML = lossCount++;
      console.log("You lost!");
      alert("You lost!");
      guessesRemaining = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
    }
    // Compares the randomly selected computer choice and the user choice
    if (computerChoice === userChoice) {
      console.log("You won!");
      alert("You won!");
      document.getElementById("winCount").innerHTML = winCount++;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
      guessesRemaining = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
      console.log("Guess again!");
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
      guessedLetters.push(userChoice);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}
