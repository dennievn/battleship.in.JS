// coded & copyright @ Duong Nguyen
// in reference to HEAD FIRST JS

// defined variables
var gpsRandom = Math.floor(Math.random()*5);
var location1 = gpsRandom;
var location2 = gpsRandom+1;
var location3 = gpsRandom+2;
var currentGuess;
var numHits = 0;
var numGuesses = 0;
var sunk = false;

/* PSEUDOCODE---- 
LOOP: while the ship is not sunk
	GET the user guess
	COMPARE the user's input to valid input values
	IF the user guess is invalid
		TELL user to enter a valid number
	ELSE 
		ADD one to currentGuess
		IF the user's currentGuess matches a location
			ADD one to numHits
			IF numHits is equal to 3
				SET sunk to true
				TELL user "you sunk my battleship!"
			END IF
		END IF
	END ELSE
END LOOP
TELL user stats 
*/

while (sunk == false){
	currentGuess = prompt("Ready to FIRE? (Place you aim shot with numbers between 1 - 6):");
	if (currentGuess < 0 || currentGuess > 6){ //validate user input
		alert("Please enter a valid number:");
	}else{
		numGuesses +=1;

		if (currentGuess == location1 || currentGuess == location2 || currentGuess == location3){
			alert("HIT");
			numHits +=1;
		
		if (numHits == 3){
			sunk = true;
				alert("You sunk my battleship!");
				}
		} else{
			alert("MISS");
		}
	}
}
var gameStatus = "You took " + numGuesses + " guesses to sink the battleship, "+ "which means your shooting accuracy was " + (3/numGuesses);
alert(gameStatus);
