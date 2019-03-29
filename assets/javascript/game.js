
var correct = 0;
var incorrect = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var pyschicChoice = "";
var userGuess = "";


var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];



var pyschic = function()  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	

}


var resetGame = function() {
	guessesLeft = 9;
	guessesSoFar = [];
	pyschic();
};





document.onkeyup = function(event)  {

	userGuess = event.key.toLowerCase();

	pyschic();

	


	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
    guessesSoFar.push(userGuess);
    
    

	// Output to the webpage
	var html = 
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>Letters Guessed</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
		"<p>"+ incorrect + "</p>";

	// Set HTML contents of the game_output id to our html string
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};

var alertWin = function() {
	alert("Congratulations You Won " + pyschicChoice);
	resetGame();
};

var alertLoss = function() {
	alert("I am sorry you are incorrect, I was thinking of " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};