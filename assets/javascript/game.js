 // VARIABLES
 // ==========================================================================

 // The array of words for the game

 
 // Pick a random word
 var game = {
    wordList: ["bodyguard", "bojack horseman", "when they see us", "archer", "russian doll", "black mirror", "ozark"],
    currentImg: "",
    lettersGuessed: "",
    word: wordList[Math.floor(Math.random() * words.length)],
    winCount: 0,
    guessesLeft: 15,
    instructions: "Press any key to get started!",
    isGameInProgress: false,


 // METHODS
    // ==============================================================================
    
    startGame: function() {
        game.instructions = "This picture is a scene from a popular Netflix Show. Select a letter to complete the title!";
        //change instructions
        document.getElementById("instructions").innerHTML = game.instructions;
        //select random word
        //display spaces
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        document.getElementById("wordToGuess").innerHTML = game.word;
        }
    },
    
    checkGuess: function(guess) {
        if (/[A-Z]/.test(guess)) {

			// Correct guess?
			if (this.word.indexOf(guess) > -1) {
				this.incorrectGuess(guess);
			} else {
				this.incorrectGuess(guess);
			}

            this.updateText();
            console.log("Guess: " + letter);}
		}
	},
    
    correctGuess: function(guess) {
        // Replace all correct letter in word
        for (var i = 0; i < this.wordObject.word.length; i++) {
            if (this.wordObject.word.charAt(i) == guess) {
                this.wordStatus = this.wordStatus.substr(0, i) + guess + this.wordStatus.substr(i + 1);
                
            }
        }
    },

    incorrectGuess: function(guess) {
        // append letter to list of guessed letters
        this.lettersGuessed += guess;
    },


    updateText: function() {
        document.getElementById("workToGuess").innerHTML = this.word;
        document.getElementById("guessesRemaining").innerHTML = this.guessesLeft;
        //document.getElementById("lettersGuessed").innerHTML = this.guess;
        document.getElementById("numberofWins").innerHTML = this.winCount;


    //updateImage: function {



 // MAIN PROCESS
 // ==============================================================================

 // Press key to get started

 document.onkeyup = function(event) {
    if (game.isGameInProgress) {
        game.startGame();
    else {game.checkGuess();
    console.log (game.isGameInProgress)  
    }
}


   
 }



 // Capture keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
 document.onkeyup = function (event) {

     // Captures the key press, converts it to lowercase, and saves it to a variable.
     var letter = event.key.toLowerCase();


     document.getElementById('guessesRemaining').innerHTML = remainingLetters;

     //post letter guessed to the UI
     document.getElementById("lettersGuessed");



 }document.getElementById("demo").addEventListener("keypress", myFunction);

 function myFunction() {
   document.getElementById("demo").style.backgroundColor = "red";
 }