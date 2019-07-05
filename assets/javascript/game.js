 // VARIABLES
 // ==========================================================================

 // HTML elements
 var instructionElement = document.getElementById("instruction");
 var wordToGuess = document.getElementById("wordToGuess");
 var guessesRemainingElement = document.getElementById("guessesRemaining");
 var lettersGuessedElement = document.getElementById("lettersGuessed");
 var numberOfWinsElement = document.getElementById("numberofWins");


 // Object variables
 var game = {
         wordList: ["bodyguard", "bojack horseman", "archer", "russian doll", "black mirror", "ozark"], //list of words
         word: "", //randomly selected word
         letterArr: [], //letters in the word
         wordObject: {},
         wordStatus: "",
         guess: "", //letter guessed by user
         currentImg: "", //image clue
         lettersGuessed: [], // letters user has already guessed
         winCount: 0, //number of wins
         guessesLeft: 10, //number of guesses remaining
         isInWord: false,
         blanks: 0, //
         lettersAndBlanks: [], //

// METHODS
// =============================================================================


//Set up game
startGame: function () {
        instructionElement.textContent = "Select a letter to complete the title of this popular Netflix show!";
        instructionElement.style.fontSize = "x-large";

        //select random word
        this.word = this.wordList[Math.floor(Math.random() * this.word.length)];
        //split letters of the random word
        this.letterArr = this.word.split('');
        //counts how many letters are left to be guessed
        this.blanks = this.letterArr.length;
        //display random word
        for (var i = 0; i < this.blanks; i++) {
            this.letterArr[i] = "_";
        }
            //send word to guess to UI
            wordToGuess.textContent = this.lettersAndBlanks;

            //logging (sanity check)
            console.log("word to guess: " + this.word);
            console.log(this.letterArr);
            console.log(this.blanks);
            console.log(this.lettersAndBlanks);
    }
}


// MAIN PROCESS
// ==============================================================================

// Press key to get started
document.onkeyup = function (event) {
    game.startGame();
}