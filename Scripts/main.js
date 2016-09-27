/****************************************************************************************************

	get html elements into arrays

*****************************************************************************************************/

var boxes = document.getElementsByClassName("column"); // get the card (divs) boxes into an array called boxes
var restartButton = document.getElementsByClassName("nav"); // get the buttons into an array called restartButton


/****************************************************************************************************

	These variables are declared globally because 
	some may be used outside the scope of the shuffle

*****************************************************************************************************/

var namesToDraw = []; // array that will hold the names of characters to draw at shuffle
var newDrawnNames = []; // array that will hold the randomized names of characters after shuffle
var drawnIndex; // number of the index of the name that is drawn from namesToDrawn 
var characterDrawn; // name of the character drawn
var cardsUp = []; // array to hold the state of cards. Each card can be facing "up" to check match, "down" or up because are already a "match"
var countMatch = 0; // number that counts the matches so far
var turnCardFunc = {}; //object that will hold functions for turning each card over and assining the randomized characters to boxes at begining of game
var matchIndex = []; // array to hold the two indexes of a match temporarily, before this info is passed to the cardsUp array
var countClicks = 0; // variable to temporarily count clicks on cards to control for two clicks before checking for match 

/****************************************************************************************************

	Shuffle Generator: generateShuffle function
		is called every time game restarts

*****************************************************************************************************/


var generateShuffle = function() {
	
	// resets variables to initial states
	countClicks = 0;
	namesToDraw = ["peppa", "peppa", "george", "george", "mummy", "mummy", "daddy", "daddy", "grandma", "grandma", "grandpa", "grandpa"];
	characterDrawn = [];
	cardsUp = ["down", "down", "down", "down", "down", "down", "down", "down", "down", "down", "down", "down" ];
	countMatch = 0;
	turnCardFunc = {};
	matchIndex = [];
	newDrawnNames = [];
	
	//picks a random name one by one from the namesToDrawArray
	for (var i = 0; i < 12; i++) {
		
		drawnIndex = Math.floor(Math.random() * (12 - i)); // randomizes an integer from 0 to one less than the number of names left in namesToDraw array
		characterDrawn = namesToDraw.splice(drawnIndex, 1); // eliminates and returns a character from namesToDraw. Assigned to array characterDrawn.
		newDrawnNames.push(characterDrawn[0]); // pushes characterDrawn into new array newDrawnNames 
		
	}
	
	//by the end of this loop, a new array newDrawnNames is full with 12 randomized names. The array namesToDraw is then empty.
};


/****************************************************************************************************

			Turn Cards Function Builder:
			
	This is a function that builds an object called
	TurnCardFunc. The builder function receives a number "funcNumber" 
	as a parameter and builds a property "functfuncNumber" 
	for the object. 
	
	The properties are themselves functions to apply a change of background 
	
	For example: turnCardFuncBuilder(0) generates
	turnCardFunc.funct0, that when called can change the background
	of a box. 
	
	...
	
	Calling turnCardFuncBuilder(0) only builds the functions 
	as properties of the object. To actually change the background 
	we have to call the functions 
	within the object after it is built, or, for example,
	
	turnCardFunc.funct0();
	
	the builder will be run emptied and run
	at the start of each game in a loop for indexes 0 to 11.
	
	Running the loop within the builder causes a closure 
	problem as the counter variable closes at 11. This was
	the solution I found.

*****************************************************************************************************/




var turnCardFuncBuilder = function(funcNumber) { // turnCardBuilder takes parameter funcNumber. Eg. turnCardFuncBuilder(0);
	

	turnCardFunc["funct" + funcNumber] = function() { //builds property "functfunNumber" of the turnCardFunc object. Eg. turnCardFunc[funct0] = ...

	// When Called, turnCardFunc.functfuncNumber() will change the background of the card box using our boxes array and the index == funcNumber. 
	// this if code below just checks if the character in that position is grandpa, because it has a jpeg extension.
	// the background is assigned by a concatenation of string using our newDrawnNames array at index == funcNumber. 
		
	if (newDrawnNames[funcNumber] != "grandpa") {
		boxes[funcNumber].style.background = "url(../Images/" + newDrawnNames[funcNumber] + ".png)";
	} else {
<<<<<<< HEAD
		boxes[funcNumber].style.background = "url(../Images/" + newDrawnNames[funcNumber] + ".jpeg)";
=======
		boxes[funcNumber].style.background = "url(../memoryGame/Images/" + newDrawnNames[funcNumber] + ".jpeg)"; 
>>>>>>> work-on-chrome
	}

	boxes[funcNumber].style.backgroundRepeat = "no-repeat";
	boxes[funcNumber].style.backgroundPosition = "center center";
	boxes[funcNumber].style.backgroundSize = "contain"; // this ensures the background is resized to fit each box.
	boxes[funcNumber].style.transform = "rotateY(180deg)"; //this rotates the cards 180 degrees and with the transition creates animation.
	}


};

/****************************************************************************************************

			TurnCardsOver function:
		this function when called turns all cards that 
		are "up" but not "matched", to "down"
		by changing the background of the box
		back to the logo.
		
		This function will be run after there are two
		clicks with no match.

*****************************************************************************************************/

var turnCardsOver = function() {
	var delay = setTimeout(turn, 1000) // this puts a timeout so the user can see the cards unmatch for a while to memorize before they are turned down.
	
	
	//this turn function is run automatically after the timeout, goes through all boxes, checks if the cards are up and turns them over.  
	function turn() {
		for (var i = 0; i < 12; i++) {
			if (cardsUp[i] == "up") {
				boxes[i].style.background = "url(../Images/logo.png)";
				boxes[i].style.backgroundRepeat = "no-repeat";
				boxes[i].style.backgroundPosition = "center center";
				boxes[i].style.backgroundSize = "contain";
				boxes[i].style.transform = "rotateY(0deg)"; //this rotates the cards back to 0 degrees.
				cardsUp[i] = "down"; // this sets the position of the card to "down" for control of the state of cards. 
				}
		}
	}
	countClicks = 0; // this resets our temporary clickCounter to 0. 

};


/****************************************************************************************************

			TurnAllCardsOver function:
		this function when called turns all cards to "down"
		by changing the background of every box
		back to the logo.
		
		This function will be run when the game is reset.
		so that all cards turn down before the new shuffle

*****************************************************************************************************/


var turnAllCardsOver = function() {
	for (var i = 0; i < 12; i++) {
		boxes[i].style.background = "url(../Images/logo.png)";
		boxes[i].style.backgroundRepeat = "no-repeat";
		boxes[i].style.backgroundPosition = "center center";
		boxes[i].style.backgroundSize = "contain";
		boxes[i].style.transform = "rotateY(0deg)";
		}
};

/****************************************************************************************************

			shuffleAnimation function:
		this function when called rotates every card 360 degrees
		waits then rotates back to 0 degree..creating a shuflling animation
		
		This function will be run when the game is reset, but after
		all the cards are turned down.

*****************************************************************************************************/


var shuffleAnimation = function() {
	for (var i = 0; i < 12; i++) {
	
		boxes[i].style.transform = "rotateY(360deg)";
	}
	
	var delay = setTimeout(shuffle, 500);
	
	function shuffle() {
		for (var i = 0; i < 12; i++) {
		
		boxes[i].style.transform = "rotateY(0deg)";
		}
	}
	
		
};

/****************************************************************************************************

			finishGame function:
		this function calls the turnAllCardsOver function above, turning all cards down.
		It waits, then runs the shuffleAnimation function above.

*****************************************************************************************************/



var finishGame = function() {
	
	turnAllCardsOver(); //calls the turnAllCardsOver function above
	
	var delay = setTimeout(reShuffle, 500); //sets a timeout of half a second so the user can see all the cards turning down
	
	//this function runs automatically after the timeout, calling the suffleAnimation function. 
	function reShuffle() {
		shuffleAnimation();
	}
};

/****************************************************************************************************

			checkMatch function:
		this function checks if there is a match of two cards. We will always have a max of two cards in the 
		"up" state in our cardsUp array, so this function checks to see if the characters match.
		
		This function will be called when two cards are up to see if they match. 

*****************************************************************************************************/


var checkMatch = function() {
	var firstTrue = cardsUp.indexOf("up"); // first it gets the index of the first card that is in the up state
	var secondTrue = cardsUp.indexOf("up", firstTrue + 1); // then it gets the index of the second card in the "up" state after the first.
	
	//checks if the names of the caracters in these two indexes of newNamesDrawn are the same. If they are we push these two indexes to our matchIndex array.
	//and returns true. If false it returns false.
	if (newDrawnNames[firstTrue] == newDrawnNames[secondTrue]) { 
		matchIndex.push(firstTrue);
		matchIndex.push(secondTrue);
		return true;
	} else {
		return false;
	}
};

/****************************************************************************************************

			congrats function:
		this alerts a congratulation message after a timeout.
		
		It will be called when the user has matched every card. 

*****************************************************************************************************/

var congrats = function() {
	var delay = setTimeout(message, 1000)
	
	function message() {
		alert("CONGRATULATIONS YOU WON!!");
	}
}

/****************************************************************************************************

			restartFunc function:
		this calls the finishGame function, turning all the cards down and running the shuffling animation.
		
		it then calls the generateShuffle function, resetting all the variables and
		reshuffling the deck.
		
		it the runs the turnCardFuncBuilder for every index, building the functions to change the backgrounds
		for the reshuffled deck.

*****************************************************************************************************/


function restartFunc() {
	finishGame();
	generateShuffle();
	for (var i = 0; i < 12; i++) {
		turnCardFuncBuilder(i);
	}
}


/****************************************************************************************************

			turnCard functions.
		these functions are called when there are clicks on each of cards. there is one turnCard function 
		for each card. This function will be called via an event listener when the user clicks on a box. 
		
		I could have built these with a builder as well, but decided to build one by one.
		
*****************************************************************************************************/


var turnAndCheckBuilder = function(functNumber) {
	
	
	
	
	
};


function turnCard0() {
	turnCardFunc.funct0(); //the function first calls relative turnCardFunc.funct function. This will turn over the card.
	countClicks += 1; // this adds 1 to our temporary click counter
	cardsUp[0] = "up"; // this sets the position of the card to up in our card state control array cardsUp. 
	
	//checks if it is the second click. If it is the first click, the function finishes. 
	if (countClicks == 2) {
		
		//if it is the second click, calls the checkMatch function. If it is not a match, calls the turnCardsOver function.
		if (!checkMatch()) { 
			turnCardsOver();
		
		//if it is a match, sets both match cards to the "match" state in our card state control array cardsUp, using our matchIndex.
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			
			//resets the click counter to zero, empties our matchIndex array and adds 1 to our match counter
			countClicks = 0; 
			matchIndex = [];
			countMatch += 1;
			
			// checks if the user has reached 6 matches. If so, alerts congrats! a
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}	

//same comments apply to all the functions below

function turnCard1() {
	turnCardFunc.funct1();
	countClicks += 1;
	cardsUp[1] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
		
	}
}

function turnCard2() {
	turnCardFunc.funct2();
	countClicks += 1;
	cardsUp[2] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}	
	}
}	

function turnCard3() {
	turnCardFunc.funct3();
	countClicks += 1;
	cardsUp[3] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}

function turnCard4() {
	turnCardFunc.funct4();
	countClicks += 1;
	cardsUp[4] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}	

function turnCard5() {
	turnCardFunc.funct5();
	countClicks += 1;
	cardsUp[5] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}

function turnCard6() {
	turnCardFunc.funct6();
	countClicks += 1;
	cardsUp[6] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}	

function turnCard7() {
	turnCardFunc.funct7();
	countClicks += 1;
	cardsUp[7] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}

function turnCard8() {
	turnCardFunc.funct8();
	countClicks += 1;
	cardsUp[8] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}	
	}
}	

function turnCard9() {
	turnCardFunc.funct9();
	countClicks += 1;
	cardsUp[9] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}	
	}
}

function turnCard10() {
	turnCardFunc.funct10();
	countClicks += 1;
	cardsUp[10] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}	

function turnCard11() {
	turnCardFunc.funct11();
	countClicks += 1;
	cardsUp[11] = "up";
	if (countClicks == 2) {
		if (!checkMatch()) {
			turnCardsOver();
		} else {
			cardsUp[matchIndex[0]] = "match"
			cardsUp[matchIndex[1]] = "match"
			countClicks = 0;
			matchIndex = [];
			countMatch += 1;
			if (countMatch == 6) {
				congrats();
			}
		}
	}
}

/****************************************************************************************************

			startGame function.
		this functions will be run at window.onload. 
		it shuffles the deck for the first time.
		it builds the turnCardFuncBuilder functions
		it adds eventlisteners for everybox that calls the turnCard functions. 
		
*****************************************************************************************************/

var startGame = function() {
	generateShuffle();
	for (var i = 0; i < 12; i++) {
		turnCardFuncBuilder(i);
	}
	boxes[0].addEventListener("click", turnCard0);
	boxes[1].addEventListener("click", turnCard1);
	boxes[2].addEventListener("click", turnCard2);
	boxes[3].addEventListener("click", turnCard3);
	boxes[4].addEventListener("click", turnCard4);
	boxes[5].addEventListener("click", turnCard5);
	boxes[6].addEventListener("click", turnCard6);
	boxes[7].addEventListener("click", turnCard7);
	boxes[8].addEventListener("click", turnCard8);
	boxes[9].addEventListener("click", turnCard9);
	boxes[10].addEventListener("click", turnCard10);
	boxes[11].addEventListener("click", turnCard11);
	restartButton[0].addEventListener("click", restartFunc);

};



window.onload = function() {
	startGame();
}













		

