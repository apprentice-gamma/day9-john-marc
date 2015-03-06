var readline = require('readline');

var startHangman = readline.createInterface(process.stdin, process.stdout);

function hangman(word){
        var splitWord = word.toLowerCase().split("");
        var splitWordCopy = splitWord;
        var guesses = [];
        var guessCounter = 0;
        hangmanNest();

        function hangmanNest() {
                if (guessCounter === 6) {
                                console.log("You've used up all your guesses. Goodbye.");
                                process.exit(0);
                }
                startHangman.question("Make a guess: ", function( input ) {
                        guessCounter += 1;
                        for(var i=0; i<splitWord.length; i++) {
                                if (input.toLowerCase() === splitWord[i]) {
                                        splitWordCopy.splice(i, 1);
                                } else if (i === splitWord.length-1 && input.toLowerCase() !== splitWord[i]) {
                                        guesses.push(input);    
                                }
                        }
                        //how would I access i from here??
                        if (splitWordCopy.length === 0) {
                                console.log("You've guessed the word! Congratulations!");
                                process.exit(0);
                        } else {
                                startHangman.question("Type 'g' to see your guesses, type 'h' to receive a one-letter hint, or type 'c' to continue playing \n", function( option ) {
                                                if (option.toLowerCase()==="g") {
                                                        console.log("Here are your guesses: ");
                                                        for (var j=0; j<guesses.length; j++) {
                                                                console.log(guesses[j]);
                                                        }
                                                        console.log("---------------");
                                                        hangmanNest();
                                                } else if (option.toLowerCase()==="h") {     
                                                        console.log("Here's a hint: ");
                                                        console.log(splitWordCopy[0]);
                                                        hangmanNest();
                                                } else if (option.toLowerCase()==="c") {
                                                        hangmanNest();
                                                } else {
                                                        console.log("Wrong input. Continue playing."); 
                                                        hangmanNest();  
                                                } 
                                });
                        }
                });

        }
};

//remember to downcase the user's input

console.log("LET'S PLAY HANGMAN!");
hangman("Cat");