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
    wordList: ["BODYGUARD", "BOJACK HORSEMAN", "ARCHER", "RUSSIAN DOLL", "BLACK MIRROR", "OZARK"], //list of words
    word: "", //randomly selected word
    letterArr: [], //letters in the word
    lettersGuessed: [], // letters user has already guessed
    winCount: "0", //number of wins
    guessesLeft: 10, //number of guesses remaining
    isInWord: false, // is the guessed letter in the word
    blanks: 0, //unguessed letters
    lettersAndBlanks: [], //unguessed and guessed letters in the word
    correctAudio: new Audio("./assets/audio/netflix_opening-63348138-4a91-4e7a-9c80-3932576af4bc.mp3"),


    // METHODS
    // =============================================================================


    //Set up game
    startGame: function () {
        instructionElement.textContent = "Click a letter to guess the Netflix show!";
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

        //logging
        console.log("word to guess: " + this.word);
        console.log("word status: " + this.letterArr);
        console.log("wins:" + this.winCount);
    },


    checkGuess: function (guess) {

        //check each letter to see if it matches word
        for (var i = 0; i < this.blanks; i++) {
            //if guessed letter is in the word...
            if (this.letterArr[i] == guess) {
                //update correct letter in letter array
                this.lettersAndBlanks[i] = guess;
                //update UI
                wordToGuessElement.textContent = this.lettersAndBlanks;
                //play correct sound
                this.playAudio();
                //log result
                console.log("word status: " + this.lettersAndBlanks);
            }

            //if guessed letter is not in word...
            else {
                //push the incorrect letter to the guessed letter section
                this.lettersGuessed.push(guess);
                //reduce guesses left count and update on UI
                this.guessesLeft--;
                //update UI
                guessesRemainingElement.textContent = this.guessesLeft;
                //log result
                console.log("word status: " + this.lettersAndBlanks);
            }
        }
    },

    outcome: function () {

        //if the word has been guessed successfully
        if (this.letterArr == this.lettersAndBlanks) {
            //add a win to the win count
            this.winCount++;
            //update UI
            numberOfWinsElement.textContent = this.winCount;
            instructionElement.textContent = "Congrats! You win!";
            //reset game
            this.reset();
        }

        //if the user has run out of guesses
        else if (this.guessesLeft === 0) {
            //update UI
            instructionElement.textContent = "You're out of guesses, give it another go!";
            //reset game
            this.reset();
        }
    },

    //reset game method
    resetGame: function () {
        this.guessesLeft = 10;
        this.letterArr = [];
        this.lettersGuessed = [];
        this.winCount = "0";
        this.guessesLeft = 10;
        this.isInWord = false;
        this.blanks = 0;
        this.lettersAndBlanks = [];
    },

    //correct letter sound
    playAudio: function () {
        this.audio.play;
    },
}


// MAIN PROCESS
// ==============================================================================

// Press key to get started

document.onkeyup = function (event) {
    game.startGame();
    var guess = String.fromCharCode(event.keyCode).toUpperCase();
    game.checkGuess(guess);
    game.outcome();
}