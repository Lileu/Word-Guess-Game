 // VARIABLES
 // ==========================================================================

 // The array of words for the game
 var instructionElement = document.getElementById("instruction");
 var wordToGuess = document.getElementById("wordToGuess");
 var guessesRemainingElement = document.getElementById("guessesRemaining");
 var lettersGuessedElement = document.getElementById("lettersGuessed");
 var numberOfWinsElement = document.getElementById("numberofWins");


 // Pick a random word
 var game = {
         wordList: ["bodyguard", "bojack horseman", "archer", "russian doll", "black mirror", "ozark"], //list of words
         word: "", //randomly selected word
         wordArr: [],
         wordObject: {},
         wordStatus: "",
         guess: "", //letter guessed by user
         currentImg: "", //image clue
         lettersGuessed: [], // letters user has already guessed
         winCount: 0, //number of wins
         guessesLeft: 10, //number of guesses remaining
         isInWord: false,

         // METHODS
         // =============================================================================


         //Set up game
         startGame: function () {
             instructionElement.textContent = "This picture is a scene from a popular Netflix Show. Select a letter to complete the title!";
             instructionElement.style.fontSize = "x-large";

             //select random word
             this.word = this.wordList[Math.floor(Math.random() * this.word.length)];
             
             //display random word
             for (var i = 0; i < this.word.length; i++) {
                this.wordArr[i] = "_";
             }
             wordToGuess.textContent = this.wordArr;  
             
             //just checking...
             console.log(this.word);       
             console.log(this.wordArr);
             
         },
        
     
        //Check guess
        checkGuess: function (guess) {
            if (/[A-Z]/.test(guess)) {

                //validate letter against word
                if (this.wordObject.indexOf(guess) > -1) {
                    this.correctGuess(guess);
                } else {
                    this.wrongGuess(guess);
                }
                this.updateText();
            }
        },


        correctGuess: function(guess) {
            // Replace correctly guessed letter in wordStatus (substring method specified the starting position and length for the placement of guess in the the string)
            for (var i = 0; i < this.wordObject.word.length; i++) {
                if (this.wordObject.word.charAt(i) == guess) {
                    this.wordStatus = this.wordStatus.substr(0, i) + guess + this.wordStatus.substr(i + 1);
                }
            }
    
            // Is the word complete?
            if (this.wordStatus == this.wordObject.word) {
                this.winCount++;
            }
        },
    
        wrongGuess: function(guess) {
            // Check if letter has already been guessed
            if (this.lettersGuessed.indexOf(guess) == -1) {
                var letterSpan;
                this.lettersGuessed += guess;

    
                // Add guess to lettersGuessed variable
                this.lettersGuessed += guess;
    
                // If lettersGuessed has 1 or more guesses, add trailing space
                // Else remove existing space
                if (this.lettersGuessed.length > 1){

                    getElementById("lettersGuessed").innerHTML = "";
                }
    
                // Add guess to lettersGuessed div
           
                lettersGuessedElement.appendChild(letterSpan);
    
                // Out of guesses?
                this.guessesLeft--;
                if (this.guessesLeft < 1) {
                    //this.updateImage();
                    //this.playSound("lose");
                    this.newWord();
               // } else {
                 //   this.playSound("wrong");
                }
            }
        },

            UpdateText: function() {
                // Update all text fields on the UI
                this.winCount.textContent = this.winCount;
                this.wordStatus.textContent = this.wordStatus;
                this.guessesRemaining.textContent = this.guessesLeft;
            }
        }


     // MAIN PROCESS
     // ==============================================================================

     // Press key to get started

     document.onkeyup = function (event) {
         game.startGame();
     }

     document.onkeyup = function (event) {
         var guess = String.fromCharCode(event.keyCode).toUpperCase();
         game.checkGuess(guess);
     }