//Global Scope Vars Available//
//Letter Choices Available//
var compChoice = ['a', 'b', 'c', 'd,', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Scoreboard//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = null;
var randomNumber = Math.floor(Math.random() * compChoice.length);
console.log(randomNumber);
//Let's the Computer Select Random Letters//



//Listens for event
	document.onkeyup = function(event) {
		compGuess = compChoice[randomNumber];
		console.log(compGuess);
//Change userGuess to Event.key	
		userGuess = event.key;
		console.log(userGuess);
//Make guesses go down by 1
		guessesLeft = guessesLeft - 1;
	


	//Lose Condition is when userGuesses equals 9
		guessedLetters.push(userGuess);
		if (guessesLeft === 0) {
			guessesLeft = 9;
			guessedLetters = [];
			losses = losses +1;
			document.getElementById("losses").innerHTML ="Losses: " +losses;
	//Resets picks random letter again
			randomNumber = Math.floor(Math.random() * compChoice.length);
			// var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];	
		}


	// When user presses a key, it records it and saves to userGuess
		var soFar = document.getElementById("soFar");
		soFar.innerHTML = "Your guesses so far: " + guessedLetters;

	//Make Guesses Left appear in HTML
		document.getElementById("guessLeft").innerHTML ="Guesses Left: " +guessesLeft;

	//Win Coditions - When computer choice equals user condition
		if (compGuess === userGuess) {
			//("YOU WIN");
			wins = wins + 1;
			document.getElementById("wins").innerHTML ="Wins: " + wins;
			guessesLeft= 9;
			guessedLetters = [];
	//Resets picks random letter
			randomNumber = Math.floor(Math.random() * compChoice.length);

		}

}










