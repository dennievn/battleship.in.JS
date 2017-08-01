var location1 = 3;
var location2 = 4;
var location3 = 5;
var currentQuess;
var numHits = 0;
var numQuesses = 0;
var sunk = false;

/* LOOP: while the ship is not sunk
	GET the user guess
	COMPARE the user's input to valid input values
	IF te user guess is invalid
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
	currentQuess = prompt("Enter your guess");
	if (currentQuess == NaN){
		alert("Please enter a valid number:");
	}else{
		currentQuess++;
	}
	if (currentQuess == location1 || currentQuess == 2 || currentQuess == 3){
		numHits++;
	}
	if (numQuesses == 3){
		sunk = true;
		alert("You sunk my battleship!");
	}
}
