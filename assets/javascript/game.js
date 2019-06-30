 // VARIABLES
 // ==========================================================================

 // The array of words for the game

 var wordLIst = ["bodyguard", "bojack horseman", "when they see us", "archer", "russian doll", "black mirror", "ozark"];

 // Pick a random word
 var word = wordList[Math.floor(Math.random() * words.length)];
 var wins = 0
 var guessCount = 0;
 var maxGuesses = 15;

 // Letters for random word array = [];
 for (var i = 0; i < word.length; i++) {
     wordList[i] = "_";
 }


 // FUNCTIONS
 // ==============================================================================

 function captureData() {
    console.log();
 }

 // MAIN PROCESS
 // ==============================================================================

 // Press key to get started

 document.onkeyup = function (event) {

     //select random word

     //display picture

     //change instructions
 }

 // Capture keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
 document.onkeyup = function (event) {

     // Captures the key press, converts it to lowercase, and saves it to a variable.
     var letter = event.key.toLowerCase();
     console.log(letter);

     //if function - if letter is in the word, post to the letter space on the UI; else....

     //reduce guesses remaining and post to UI

     //post letter guessed to the UI
     document.getElementById("lettersGuessed");

 }