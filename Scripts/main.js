var boxes = document.getElementsByClassName("column");
var restartButton = document.getElementsByClassName("nav");
var countClicks = 0;

var namesToDraw = ["peppa", "peppa", "george", "george", "mummy", "mummy", "daddy", "daddy", "grandma", "grandma", "grandpa", "grandpa"];
var newDrawnNames = [];
var drawnIndex;
var characterDrawn;

var cardsUp = [false, false, false, false, false, false, false, false, false, false, false, false ];

var generateShuffle = function() {

	for (var i = 0; i < 12; i++) {
		
		drawnIndex = Math.floor(Math.random() * (12 - i));
		characterDrawn = namesToDraw.splice(drawnIndex, 1)
		newDrawnNames.push(characterDrawn[0]);	
		
	}
};



var turnCardFunc = {};



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

var turnAllcardsOver = function() {
	var delay = setTimeout(turn, 1000)
	
	function turn () {
		for (var i = 0; i < 12; i++) {
			if (cardsUp[i] == true) {
				boxes[i].style.background = "url(../Images/logo.png)";
				boxes[i].style.backgroundRepeat = "no-repeat";
				boxes[i].style.backgroundPosition = "center center";
				boxes[i].style.backgroundSize = "contain";
				boxes[i].style.transform = "rotateY(360deg)";
				cardsUp[i] = false;
				}
		}
	}
	countClicks = 0;
	turnCardFuncBuilder();
};

var finishGame = function() {
	turnAllcardsOver();
	
	location.reload(true);
	
};

function turnCard0() {
	turnCardFunc.funct0();
	countClicks += 1;
	cardsUp[0] = true;
	if (countClicks == 2) {
		turnAllcardsOver();
	}
}	

function turnCard1() {
	turnCardFunc.funct1();
	countClicks += 1;
	cardsUp[1] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
		
	}
}

function turnCard2() {
	turnCardFunc.funct2();
	countClicks += 1;
	cardsUp[2] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}	

function turnCard3() {
	turnCardFunc.funct3();
	countClicks += 1;
	cardsUp[3] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}

function turnCard4() {
	turnCardFunc.funct4();
	countClicks += 1;
	cardsUp[4] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}	

function turnCard5() {
	turnCardFunc.funct5();
	countClicks += 1;
	cardsUp[5] = true;
	if (countClicks == 2) {
		turnAllcardsOver();
	}
}

function turnCard6() {
	turnCardFunc.funct6();
	countClicks += 1;
	cardsUp[6] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}	

function turnCard7() {
	turnCardFunc.funct7();
	countClicks += 1;
	cardsUp[7] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}

function turnCard8() {
	turnCardFunc.funct8();
	countClicks += 1;
	cardsUp[8] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}	

function turnCard9() {
	turnCardFunc.funct9();
	countClicks += 1;
	cardsUp[9] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}

function turnCard10() {
	turnCardFunc.funct10();
	countClicks += 1;
	cardsUp[10] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}	

function turnCard11() {
	turnCardFunc.funct11();
	countClicks += 1;
	cardsUp[11] = true;
	if (countClicks == 2) {
		turnAllcardsOver();	
	}
}

function restartFunc() {
	finishGame();
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













		

