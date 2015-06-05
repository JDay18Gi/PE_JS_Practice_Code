

function alarm (time) {
	var message = "";
	switch(time.charAt(0)) {
		case "7":
			message = "7am ALARM!!";
			break;
		case "8":
			message = "8am ALARM!!";
			break;
		case "9":
			message = "9am ALARM!!";
			break;
		default:
			message = "No alarm for now!"
	}
	return message;
}

alarm("7:00");
alarm("8:00");
alarm("11:00");

var alarm = function(time) {
	var message = "";
	switch(time.charAt(0)) {
		case "7":
			message = "7am ALARM!!";
			break;
		case "8":
			message = "8am ALARM!!";
			break;
		case "9":
			message = "9am ALARM!!";
			break;
		default:
			message = "No alarm for now!"
	}
	return message;
}

alarm("7:00");
alarm("8:00");
alarm("11:00");


var roomDecision = function (sessionNum, meal, nap) {
	var alert = "Room @ Desk"
	if ((meal === "yes") || (nap === "yes")) {
		alert = "LivingRoom"
	} else {
		if (sessionNum%2 === 0) {
			alert = "LivingRoom";
		}
	}
	return alert;
}

roomDecision(2, "no", "no");
roomDecision(2, "yes", "no");
roomDecision(3, "no", "no");
roomDecision(3, "yes", "yes");

//alert contents of function

alert(roomDecision);

alert(alarm);

// using the .map feature

var economists = ["Ludwig von Mises", "F.A. Hayek", "Murray Rothbard" ];

var splitNames = economists.map(function(arrayCell) {
		return arrayCell.split(" ");
		}
	);

// .map 2x

var removeMiddle = splitNames.map(function(arrayCell) {
	if (arrayCell.length === 3) {
		arrayCell.splice(1, 1);
	}
	return arrayCell;
	}
	);

removeMiddle;

// array of functions

var letterFinderFunctions = [
function(string) {return string.match(/a/g).length;},
function(string) {return string.match(/b/g).length;},
function(string) {return string.match(/c/g).length;} ]

letterFinderFunctions[0]("Hello, my name is Jason!");
letterFinderFunctions[1]("buzzing bees!");
letterFinderFunctions[2]("ce me ce me ce me?");


//

function adventureSelector(userChoice) {
	switch (userChoice) {
	    case 1:
	      return function() {alert("You selected the Vines of Doom!");};
	      break;
	    case 2:
	      return function() {alert("Looks like you want the Lake of Despair!");};
	      break;
	    case 3:
	      return function() {alert("The Caves of Catastrophe!");};
	      break;
	}
}

adventureSelector(1);
adventureSelector(3());

function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}

adventureSelector(1);
adventureSelector(3());


//Working with Basic Closures

function testClosure () {
	var x = 4;
	return x;
}

var testClosure = function () {
	var x = 4;
	return x;
}

//Closure 1

function testClosure () {
	var x = 4;
	function closeX () {
		return x;
	}
	return closeX;
}


var testClosure = function () {
	var x = 4;
	function closeX () {
		return x;
	}
	return closeX;
}

var checkLocalX = testClosure();