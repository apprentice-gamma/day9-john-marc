var readline = require('readline');

var calculation = readline.createInterface(process.stdin, process.stdout);

//Your program should ask the user which operation they would like to perform: addition, subtraction, multiplication, division, or square root. 

var add = function(numOne, numTwo){
	return numOne + numTwo;
};

var subtract = function(numOne, numTwo){
	return numOne - numTwo;
};

var multiply = function(numOne, numTwo){
	return numOne * numTwo;
};

var divide = function(numOne, numTwo){
	return (numOne / numTwo);
};

var sqRoot = function(numOne){
	return Math.sqrt(numOne);
};

// get input from user for the first 

var calculate = function(){
	var numOne;
	var operator;
	var numTwo;

	calculation.question("Please enter the first number\n", function(inputNumOne){
		numOne = Number(inputNumOne);

		calculation.question("Please enter the operator\n", function(inputOperator){
		operator = inputOperator;

			if (operator === 'sqr'){
				console.log("Result: " + sqRoot(numOne) + ". Try again?\n");
				calculate();
			} else if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
				calculation.question("Please enter second number\n", 
					function(inputNumTwo){ 
						numTwo = Number(inputNumTwo); 
						switch ( operator ) {
							case "+" :
								console.log("Result: " + add(numOne, numTwo) + ". Try again?\n");
								calculate();
								break;
							case "-" :
								console.log("Result: " + subtract(numOne, numTwo) + ". Try again?\n");
								calculate();
								break;
							case "*" :
								console.log("Result: " + multiply(numOne, numTwo) + ". Try again?\n");
								calculate();
								break;
							case "/" :
								console.log("Result: " + divide(numOne, numTwo) + ". Try again?\n");
								calculate();
								break;
						}
					});
			} else {
				console.log("You entered an invalid value. Try again.\n");
				calculate();
			}
			// figure out which operator was entered
			
			// select the corrrect function 
		});
	});
};

//

//Depending on the user’s response, your program should request that the user input either (1) or (2) numbers to perform the desired operation.

//Your program should perform the appropriate calculation, display the result to the user, and ask if the user would like to perform another calculation. If so, the program should restart.

//Your program should include error handling for bad input.

calculate();
