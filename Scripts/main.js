var boxes = document.getElementsByClassName("column");
var restartButton = document.getElementsByClassName("nav");
var countClicks = 0;

var namesToDraw = [];
var newDrawnNames = [];
var drawnIndex;
var characterDrawn;

var cardsUp = [];

var countMatch = 0;
var turnCardFunc = {};
var matchIndex = [];

var generateShuffle = function() {
	countClicks = 0;
	namesToDraw = ["peppa", "peppa", "george", "george", "mummy", "mummy", "daddy", "daddy", "grandma", "grandma", "grandpa", "grandpa"];
	characterDrawn = [];
	cardsUp = ["down", "down", "down", "down", "down", "down", "down", "down", "down", "down", "down", "down" ];
	countMatch = 0;
	turnCardFunc = {};
	matchIndex = [];
	newDrawnNames = [];
	
	for (var i = 0; i < 12; i++) {
		
		drawnIndex = Math.floor(Math.random() * (12 - i));
		characterDrawn = namesToDraw.splice(drawnIndex, 1)
		newDrawnNames.push(characterDrawn[0]);	
		
	}
};







var turnCardFuncBuilder = function(funcNumber) {
	

	turnCardFunc["funct" + funcNumber] = function() {



	if (newDrawnNames[funcNumber] != "grandpa") {
		boxes[funcNumber].style.background = "url(../Images/" + newDrawnNames[funcNumber] + ".png)";
	} else {
		boxes[funcNumber].style.background = "url(../Images/" + newDrawnNames[funcNumber] + ".jpeg)";
	}

	boxes[funcNumber].style.backgroundRepeat = "no-repeat";
	boxes[funcNumber].style.backgroundPosition = "center center";
	boxes[funcNumber].style.backgroundSize = "contain";
	boxes[funcNumber].style.transform = "rotateY(180deg)";
	}


};

var turnCardsOver = function() {
	var delay = setTimeout(turn, 1000)
	
	function turn() {
		for (var i = 0; i < 12; i++) {
			if (cardsUp[i] == "up") {
				boxes[i].style.background = "url(../Images/logo.png)";
				boxes[i].style.backgroundRepeat = "no-repeat";
				boxes[i].style.backgroundPosition = "center center";
				boxes[i].style.backgroundSize = "contain";
				boxes[i].style.transform = "rotateY(0deg)";
				cardsUp[i] = "down";
				}
		}
	}
	countClicks = 0;
	turnCardFuncBuilder();
};

var turnAllCardsOver = function() {
	for (var i = 0; i < 12; i++) {
		boxes[i].style.background = "url(../Images/logo.png)";
		boxes[i].style.backgroundRepeat = "no-repeat";
		boxes[i].style.backgroundPosition = "center center";
		boxes[i].style.backgroundSize = "contain";
		boxes[i].style.transform = "rotateY(0deg)";
		}
};

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


var finishGame = function() {
	
	turnAllCardsOver();
	
	var delay = setTimeout(reShuffle, 500);
	
	function reShuffle() {
		shuffleAnimation();
	}
};


var checkMatch = function() {
	var firstTrue = cardsUp.indexOf("up");
	var secondTrue = cardsUp.indexOf("up", firstTrue + 1);
	if (newDrawnNames[firstTrue] == newDrawnNames[secondTrue]) {
		matchIndex.push(firstTrue);
		matchIndex.push(secondTrue);
		return true;
	} else {
		return false;
	}
};

var congrats = function() {
	var delay = setTimeout(message, 1000)
	
	function message() {
		alert("CONGRATULATIONS YOU WON!!");
	}
}

function turnCard0() {
	turnCardFunc.funct0();
	countClicks += 1;
	cardsUp[0] = "up";
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
				alert("YOU WON!! CONGRATS!!")
			}
		}
	}
}	

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

function restartFunc() {
	finishGame();
	generateShuffle();
	for (var i = 0; i < 12; i++) {
		turnCardFuncBuilder(i);
	}
}

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













		

