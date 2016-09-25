var boxes = document.getElementsByClassName("column");

var namesToDraw = ["peppa", "peppa", "george", "george", "mummy", "mummy", "daddy", "daddy", "grandma", "grandma", "grandpa", "grandpa"];
var newDrawnNames = [];
var drawnIndex;
var characterDrawn;

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


}


function turnCard0() {
		turnCardFunc.funct0();
}	

function turnCard1() {
		turnCardFunc.funct1();
}

function turnCard2() {
		turnCardFunc.funct2();
}	

function turnCard3() {
		turnCardFunc.funct3();
}

function turnCard4() {
		turnCardFunc.funct4();
}	

function turnCard5() {
		turnCardFunc.funct5();
}

function turnCard6() {
		turnCardFunc.funct6();
}	

function turnCard7() {
		turnCardFunc.funct7();
}

function turnCard8() {
		turnCardFunc.funct8();
}	

function turnCard9() {
		turnCardFunc.funct9();
}

function turnCard10() {
		turnCardFunc.funct10();
}	

function turnCard11() {
		turnCardFunc.funct11();
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
}

var finishGame = function() {
	location.reload(true);
}












		

