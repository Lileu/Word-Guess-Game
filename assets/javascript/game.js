 // VARIABLES
 // ==========================================================================

 // The array of words for the game

 
 // Pick a random word
 var game = {
    wordList: ["bodyguard", "bojack horseman", "when they see us", "archer", "russian doll", "black mirror", "ozark"];
    word: wordList[Math.floor(Math.random() * words.length)],
    winsCount: 0,
    guessCount: 0,
    maxGuesses: 15,

    startGame: function() {
        document.getElementById("word").innerHTML = game.word;

        listLetterSpaces() {
        for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        };
    }
   
var 

 // FUNCTIONS
 // ==============================================================================

 //function captureData() {
    //console.log();
// }

 // MAIN PROCESS
 // ==============================================================================

 // Press key to get started

 document.onkeyup = function (event) {

     //select random word
    var game.word = event.key;
    
     //display spaces
     document.getElementById('guessesRemaining').innerHTML =

     //display picture

     //change instructions
 }

 // Capture keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
 document.onkeyup = function (event) {

     // Captures the key press, converts it to lowercase, and saves it to a variable.
     var letter = event.key.toLowerCase();

     console.log(letter);}

     //if function - if letter is in the word, post to the letter space on the UI; else....

     //reduce guesses remaining and post to UI

     document.getElementById('guessesRemaining').innerHTML = remainingLetters;

     //post letter guessed to the UI
     document.getElementById("lettersGuessed");

 }