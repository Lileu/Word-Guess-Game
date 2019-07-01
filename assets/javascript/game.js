 // VARIABLES
 // ==========================================================================

 // The array of words for the game

 
 // Pick a random word
 var game = {
    wordList: ["bodyguard", "bojack horseman", "when they see us", "archer", "russian doll", "black mirror", "ozark"],
    word: wordList[Math.floor(Math.random() * words.length)],
    winsCount: 0,
    guessCount: 0,
    maxGuesses: 15,
    instructions: "Press any key to get started!",
 }
    
    
    // FUNCTIONS
    // ==============================================================================
    
    function startGame() {
        game.instructions = "This picture is a scene from a popular Netflix Show. Select a letter to complete the title!";
        //change instructions
        document.getElementById("instructions").innerHTML = game.instructions;
        //select random word
        //display spaces
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        document.getElementById("wordToGuess").innerHTML = game.word;
        }
    }
    
   // function runGame() {              
   // remainingLetters = word.length,
   // }
     
  
     //display spaces
     

     //display picture

     

 // MAIN PROCESS
 // ==============================================================================

 // Press key to get started

 document.onkeyup = function(event) {
    startGame();
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



 }document.getElementById("demo").addEventListener("keypress", myFunction);

 function myFunction() {
   document.getElementById("demo").style.backgroundColor = "red";
 }