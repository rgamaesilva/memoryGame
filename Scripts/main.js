/****************************************************************************************************

	dynamically create 12 divs
	
*****************************************************************************************************/

var boxItemTemplate =
	'<div class="column third">' 
+	'</div>'
;


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
var turnAndCheckFunc = {}; // object that will hold functions for that will run our turn and check functions when the user clicks on a card
var matchIndex = []; // array to hold the two indexes of a match temporarily, before this info is passed to the cardsUp array
var countClicks = 0; // variable to temporarily count clicks on cards to control for two clicks before checking for match 

/****************************************************************************************************

	Shuffle Generator: generateShuffle function
		is called every time game restarts

*****************************************************************************************************/


var generateShuffle = function() {
	
	// resets variables to initial states and empties objects
	countClicks = 0;
	namesToDraw = ["peppa", "peppa", "george", "george", "mummy", "mummy", "daddy", "daddy", "grandma", "grandma", "grandpa", "grandpa"];
	characterDrawn = [];
	cardsUp = ["down", "down", "down", "down", "down", "down", "down", "down", "down", "down", "down", "down" ];
	countMatch = 0;
	turnCardFunc = {};
	turnAndCheckFunc = {};
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
	TurnCardFunc. The builder function receives a number "functNumber" 
	as a parameter and builds a property "functfunctNumber" 
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
	
	the builder will be emptied and run
	at the start of each game in a loop for indexes 0 to 11.
	
	Running the loop within the builder causes a closure 
	problem as the counter variable closes at 11. This was
	the solution I found.

*****************************************************************************************************/




var turnCardFuncBuilder = function(functNumber) { // turnCardBuilder takes parameter functNumber. Eg. turnCardFuncBuilder(0);
	

	turnCardFunc["funct" + functNumber] = function() { //builds property "functfunNumber" of the turnCardFunc object. Eg. turnCardFunc[funct0] = ...

	// When Called, turnCardFunc.functfunctNumber() will change the background of the card box using our boxes array and the index == functNumber. 
	// this if code below just checks if the character in that position is grandpa, because it has a jpeg extension.
	// the background is assigned by a concatenation of string using our newDrawnNames array at index == functNumber. 
		
<<<<<<< HEAD
	if (newDrawnNames[funcNumber] != "grandpa") {
		boxes[funcNumber].style.background = "url(../Images/" + newDrawnNames[funcNumber] + ".png)";
	} else {
<<<<<<< HEAD
		boxes[funcNumber].style.background = "url(../Images/" + newDrawnNames[funcNumber] + ".jpeg)";
=======
		boxes[funcNumber].style.background = "url(../memoryGame/Images/" + newDrawnNames[funcNumber] + ".jpeg)"; 
>>>>>>> work-on-chrome
=======
	if (newDrawnNames[functNumber] != "grandpa") {
		boxes[functNumber].style.background = "url(../memoryGame/Images/" + newDrawnNames[functNumber] + ".png)";
	} else {
		boxes[functNumber].style.background = "url(../memoryGame/Images/" + newDrawnNames[functNumber] + ".jpeg)"; 
>>>>>>> work-on-chrome
	}

	boxes[functNumber].style.backgroundRepeat = "no-repeat";
	boxes[functNumber].style.backgroundPosition = "center center";
	boxes[functNumber].style.backgroundSize = "contain"; // this ensures the background is resized to fit each box.
	boxes[functNumber].style.transform = "rotateY(180deg)"; //this rotates the cards 180 degrees and with the transition creates animation.
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
		
		it then restarts the game.
		
		It will be called when the user has matched every card. 

*****************************************************************************************************/

function congrats() {
	var delay = setTimeout(message, 1000)
	
	function message() {
		if (confirm("You Win!! Want to play again?")) {
		restartFunc();
		}
	}
	
	
	
}




/****************************************************************************************************

			turnAndCheck Function Builder:
			
	This is a function that builds an object called
	turnAndCheckFunc. The builder function receives a number "functNumber" 
	as a parameter and builds a property "functfunctNumber" 
	for the object. 
	
	The properties are themselves functions that are called when the boxes are clicked. 
	
	For example: turnAndCheckFuncBuilder(0) generates
	turnAndCheckFunc.funct0, that put to use a lot of the functions built above
	
	the turnAndCheckFunc.funct0, for example, will:
	
	a) call the turnCardFunc.funct0() to turn over the card
	b) control and check if this is the first or second click
	c) change the status of cardsUp[0] to "up" for controlling the state of the card
	d) if it is the second click, call the checkMatch function.
	e) if it is NOT a match, call the turnCardsOver() function. 
	f) if it is a match, assign the cardsUp(0) and its match to "match"
	g) if it is a match control to see if the user has finished the game
	
	
	...
	
	Calling turnAndCheckFuncBuilder(0) only builds the function funct0
	as properties of the turnAndCheckFunc object. To actually go through steps a to g
	described above we have to call the functions 
	within the object after it is built, or, for example,
	
	turnAndCheckFunc.funct0(); I will call this function via a click event listener.
	
	the builder will be emptied and run
	at the start of each game in a loop for indexes 0 to 11.
	
	Running the loop within the builder causes a closure 
	problem as the counter variable closes at 11. 
		
*****************************************************************************************************/


var turnAndCheckFuncBuilder = function(functNumber) {
	
	turnAndCheckFunc["funct" + functNumber] = function() {
		turnCardFunc["funct" + functNumber](); //the function first calls relative turnCardFunc.funct function. This will turn over the card.
		countClicks += 1; // this adds 1 to our temporary click counter
		cardsUp[functNumber] = "up"; // this sets the position of the card to up in our card state control array cardsUp. 
		
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
	
};

/****************************************************************************************************

			restartFunc function:
		this calls the finishGame function, turning all the cards down and running the shuffling animation.
		
		it then calls the generateShuffle function, resetting all the variables, emptying the objects and
		reshuffling the deck.
		
		it the runs the turnCardFuncBuilder for every index, building the functions to change the backgrounds
		for the reshuffled deck.
		
		it then runs the turnAndCheckFuncBuilder for every index, building the functions that run when the box
		is clicked.
		
		after this is clicked, the game is reset and reshuffled. The window does not to be reloaded. 

*****************************************************************************************************/


function restartFunc() {
	finishGame();
	generateShuffle();
	for (var i = 0; i < 12; i++) {
		turnCardFuncBuilder(i);
	}
	
	for (var i = 0; i < 12; i++) {
		turnAndCheckFuncBuilder(i);
	}
}



/****************************************************************************************************

			startGame function.
		this functions will be run at window.onload. 
		it calls generateShuffle to generate a new random order or characters and reset the variables. 
		it builds the turnCardFunc functions
		it builds the turnAndCheckFunc functions
		it adds eventlisteners for everybox that calls the turnCard functions. 
		it adds an event listener for the restart button that calls our restart function
		it calls the shuffle animation. 
		
		
*****************************************************************************************************/

var startGame = function() {
	generateShuffle();
	for (var i = 0; i < 12; i++) {
		turnCardFuncBuilder(i);
	}
	
	for (var i = 0; i < 12; i++) {
		turnAndCheckFuncBuilder(i);
	}
	
	for (var i = 0; i< 12; i++) {
		boxes[i].addEventListener("click", turnAndCheckFunc["funct" + i]);
	}
	
	restartButton[0].addEventListener("click", restartFunc);
	
	var delay = setTimeout(animate, 200)
	
	function animate() {
		shuffleAnimation();
	}
};



window.onload = function() {
	var boxContainer = document.getElementsByClassName('container')[0];
	boxContainer.innerHTML = '';
	for (var i = 0; i < 12; i++) {
		boxContainer.innerHTML += boxItemTemplate; 
	}
	
	startGame();
}













		

