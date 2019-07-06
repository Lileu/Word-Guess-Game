// VARIABLES
// ==========================================================================


// HTML elements
var instructionElement = document.getElementById("instruction");
var wordToGuessElement = document.getElementById("wordToGuess");
var guessesRemainingElement = document.getElementById("guessesRemaining");
var lettersGuessedElement = document.getElementById("lettersGuessed");
var numberOfWinsElement = document.getElementById("numberOfWins");
var messageElement = document.getElementById("messageToDisplay");

// Object variables
var game = {
    wordList: ["bodyguard", "bojack horseman", "archer", "russian doll", "black mirror", "ozark"], //list of words
    word: "", //randomly selected word
    letterArr: [], //letters in the word
    wordObject: {},
    wordStatus: "",
    currentImg: "", //image clue
    lettersGuessed: [], // letters user has already guessed
    winCount: "0", //number of wins
    guessesLeft: 10, //number of guesses remaining
    isInWord: false, //
    blanks: 0, //
    lettersAndBlanks: [], //

   // correctAudio:


    // METHODS
    // =============================================================================


    //Set up game
    startGame: function () {
        instructionElement.textContent = "Guess the Netflix show!";
        instructionElement.style.fontSize = "x-large";

        //select random word
        this.word = this.wordList[Math.floor(Math.random() * this.word.length)];
        //split letters of the random word
        this.letterArr = this.word.split('');
        //counts how many letters are left to be guessed
        this.blanks = this.letterArr.length;
        //display random word
        for (var i = 0; i < this.blanks; i++) {
            this.letterArr[i] = "_ ";
        };
        //send word to guess to UI
        wordToGuessElement.textContent = this.letterArr.join("");
        guessesRemainingElement.textContent = this.guessesLeft;
        lettersGuessedElement.textContent = this.lettersGuessed;
        numberOfWinsElement.textContent = this.winCount;

        //logging (sanity check)
        console.log("word to guess: " + this.word);
        console.log("word status: " + this.letterArr);
        console.log("wins:" + this.winCount);
    },
}

// MAIN PROCESS
// ==============================================================================

// Press key to get started
document.onkeyup = function (event) {
    game.startGame();
}