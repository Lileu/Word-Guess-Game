 // VARIABLES
 // ==========================================================================

 // The array of words for the game


 // Pick a random word
 var game = {
     wordList: ["bodyguard", "bojack horseman", "when they see us", "archer", "russian doll", "black mirror", "ozark"], //list of words
     word: "", //randomly selected word
     displayWord: "",
     wordArr: [],
     guess: "", //letter guessed by user
     currentImg: "", //image clue
     lettersGuessed: [], // letters user has already guessed
     winCount: 0, //number of wins
     guessesLeft: 10, //number of guesses remaining
     validGuesses: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
     instructionElement: document.getElementById("instruction"),
     wordToGuess: document.getElementById("wordToGuess"),
     guessesRemainingElement: document.getElementById("guessesRemaining"),
     lettersGuessedElement: document.getElementById("lettersGuessed"),
     numberOfWinsElement: document.getElementById("numberofWins"),

     // FUNCTIONS
     //.=============================================================================



     //Set up game
     startGame: function () {
         this.instructionElement.textContent = "This picture is a scene from a popular Netflix Show. Select a letter to complete the title!";
         this.instructionElement.style.fontSize = "x-large";
         //select random word
         this.word = this.wordList[Math.floor(Math.random() * this.word.length)];
         console.log(this.word);
         //display random word
         for (var i = 0; i < this.word.length; i++) {
             if (this.word[i] === " ") {
                 this.displayWord[i] = "_";
             } else {
                 this.displayWord[i] = " "
             };
             this.wordToGuess.textContent = this.displayWord;
             console.log(this.displayWord);
            }
        }
    }

//Check guesss


     // MAIN PROCESS
     // ==============================================================================

     // Press key to get started

     document.onkeyup = function (event) {
         game.startGame();
     }