 // VARIABLES
 // ==========================================================================

 // The array of words for the game

 
 // Pick a random word
 var game = {
    wordList: ["bodyguard", "bojack horseman", "when they see us", "archer", "russian doll", "black mirror", "ozark"],
    word: "",
    guess: "",
    currentImg: "",
    lettersGuessed: "",
    winCount: 0,
    guessesLeft: 15,
    gameStarted: false,
    instructions: "",
 
    
    // FUNCTIONS
    // ==============================================================================

startGame: function() {
    document.getElementById('instruction').textContent = "This picture is a scene from a popular Netflix Show. Select a letter to complete the title!";
    document.getElementById('instruction').style.fontSize = "x-large";

    }
};

   
 // MAIN PROCESS
 // ==============================================================================

 // Press key to get started

 document.onkeyup = function(event) {
     game.startGame();
 }