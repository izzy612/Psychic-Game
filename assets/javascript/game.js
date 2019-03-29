
//Setting variables

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


      
//Generates random number

var pyschic = function()  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	

}

//function will reset everything after win or lose

var resetGame = function() {
	guessesLeft = 9;
	guessesSoFar = [];
	pyschic();
};


// captures the players input
//.onkeyup captures the players input as userGuess

document.onkeyup = function(event)  {

	userGuess = event.key.toLowerCase();

	pyschic();

  //handles correct guesses	

	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
  } 
  
  // handles incorrect guesses

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
    
    // When the user is out of guesses, an alert will show up  
    
    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};
// An alert of winning the game and the game will reset
var alertWin = function() {
	alert("Congratulations You Won ");
	resetGame();
};

// An alert of losing the game and the game will reset

var alertLoss = function() {
	alert("I am sorry you are incorrect, I was thinking of " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};