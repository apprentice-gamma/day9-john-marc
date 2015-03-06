
var readline = require('readline');

var suggestedWord = readline.createInterface(process.stdin, process.stdout);

function getPalindrome(){

	suggestedWord.question("\nLET'S DO A PALINDROME CHECK!\n\nEnter one word and then check it against its proposed palindrome. \nPlease enter your word.\n", function( input ){
			var temp = input.split("").reverse().join("");	
			if (temp === input) {
				console.log("You've got a palindrome!");
			} else {
				console.log( input + " is not a palindrome." );
			}
			getPalindrome();
	});
};

// run the program
getPalindrome();