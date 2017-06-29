//Global Scope Vars Available//
//Letter Choices Available//
var compChoice = ['a', 'b', 'c', 'd,', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	

//Scoreboard//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = null;

//Let's the Computer Select Random Letters//
var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
console.log("This is the Answer" + compGuess);

//Listens for event
	document.onkeyup = function(event) {
//Change userGuess to Event.key	
	 userGuess = event.key;
	
// When user presses a key, it records it and saves to userGuess
	var soFar = document.getElementById("soFar");
	soFar.innerHTML = "Your guesses so far: " + userGuess;

//Lose Condition is when userGuesses equals 9
	guessedLetters.push(userGuess);
	if (guessedLetters.length === 9) {
		alert("Your not a Psychic After All");
	} else {
//Add additional letters to Your guesses so far via array using push function
//Have to create additional element
		
		soFar.appendChild = guessedLetters;
	}
//Win Coditions - When computer choice equals user condition
	if (compGuess === userGuess) {
		alert("YOU WIN");
	}


}



//Allows the user 9 guesses








