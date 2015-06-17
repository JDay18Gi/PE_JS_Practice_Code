// function to ananymous 1

function smileyFace() {
	console.log(":)");
}

var smileyFace = function() {
	console.log(":)");
};

// function to ananymous 2

function helloName(name) {
	return "Hello, "+name+"!";
}

var helloName = function(name) {
	return "Hello, "+name+"!";
};

// function to ananymous 3

function windowTrigger(windowPosition) {
	if (windowPosition.toLowerCase() === "open") {
		return "TAKE ACTION!";
	} else {
		return "No action required.";
	}
}

var windowTrigger = function(windowPosition) {
	if (windowPosition.toLowerCase() === "open") {
		return "TAKE ACTION!";
	} else {
		return "No action requried.";
	}
};

// function result stored in variable and called 1

var groceryBill = function(item1, item2, item3) {
	return item1+item2+item3;
}

var tuesdayBill = groceryBill(1.20, 2.33, 50.20);

console.log(tuesdayBill);

// function result stored in variable and called 2

var dollarAmount = function($amount1, $amount2) {
	return parseInt($amount1.substring(1)) + parseInt($amount2.substring(1));
};

var tuesdayAmount = dollarAmount("$20", "$30");

console.log(tuesdayAmount);


// function result stored in variable and called 3

var fearIndex = function(scares, thunder, clowns) {
	return scares * thunder * clowns;
};

fearToday = fearIndex(20, 5, 1);

console.log(fearToday);

//alert the contents of the fucntion 1

var groceryBill = function(item1, item2, item3) {
	return item1+item2+item3;
}

alert(groceryBill);

//alert the contents of the fucntion 2

var dollarAmount = function($amount1, $amount2) {
	return parseInt($amount1.substring(1)) + parseInt($amount2.substring(1));
};

alert(dollarAmount);

//alert the contents of the fucntion 3

var fearIndex = function(scares, thunder, clowns) {
	return scares * thunder * clowns;
};

alert(fearIndex);


//if else function + function calling function 1

var mood = "happy";

var encouragementMessage = function() {
	if (mood.toLowerCase() === "happy") {
		return "Glad to see you're happy! Carry on!";
	} else if (mood.toLowerCase() === "sad") {
		return "I'm sorry to hear you are sad. :( Remember the good times!";
	} else {
		return "I'm a computer and only understand happy or sad. I'm sorry!";
	}
};

function moodMessage(func) {
	return func();
}

moodMessage(encouragementMessage);

//if else function + function calling function 2

var studyStatus = "no progress";

var teacherResponse = function() {
	if (studyStatus === "no progress") {
		return "Get back to it, kid!";
	} else if (studyStatus === "passed!") {
		return "Like a BOSS! Good work!";
	} else {
		return "What?";
	}
};

function teacherMessage(func) {
	return func();
}

teacherMessage(teacherResponse);

//if else function + function calling function 3

var readingPace = "slow";

var speedEvaluation = function () {
	if (readingPace==="fast") {
		return "Nice! Nothing to see here!";
	} else if (readingPace==="slow") {
		return "Dude! Get after it!";
	} else {
		return "That computer thing again, I only understand slow or fast. Sorry!";
	}
};

function evaluationMessage(func) {
	return func();
}

evaluationMessage(speedEvaluation);


// Array into modified Array with map() 1

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var firstNames = passengers.map(
	function(cell) {
		return cell[0];
	}
);

firstNames


// Array into modified Array with map() 2

var passengers = [	["Joe", "Smith"],
					["Jasone", "Black"],
					["Jim", "Frank"],
					["Jake", "keystone"] ];

var lastProper = passengers.map(
	function(cell) {
		return "Mr. " + cell[1];
	}
);

lastProper


// Array into modified Array with map() 3

var passengers = [	["Joe", "Smith", "M"],
					["Jasone", "Black", "F"],
					["Jim", "Frank", "M"],
					["Jake", "keystone", "F"] ];

var lastProperGender = passengers.map(
	function(cell) {
		if (cell[2] === "M") {
			return "Mr. " + cell[1];
		} else {
			return "Mrs. " + cell[1];
		}
	}
	);

//Alert function for an array using Map 1

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

var alertNames = modifiedNames.map(
	function(cell) {
		alert("Hello, "+cell);
	}
	);

//Alert function for an array using Map 2

var travelList =	["Paris, France",
					"London",
					"Switzerland",
					"Crazy Place"];

placesAlert = travelList.map(
	function(cell) {
		alert("I would like to go to "+cell+".");
	}
	);



//Alert function for an array using Map 3


var messageAlerts = ["Warning!",
					"Alert!",
					"Notification!"];

var alertMessags = messageAlerts.map(
	function(cell) {
		alert(cell);
	}
	);

alertMessags

// Array of functions 1

var additionFunctions = [
	function(input) {return input+4;},
	function(input) {return input+20;},
	function(input) {return input+11;}
]

// Array of functions 2

var stringFunctions = [
	function(word) {return word.toLowerCase();},
	function(word) {return word.toUpperCase();},
];

// Array of functions 3

var multiplicationFunctions = [
	function(num) {return num*1},
	function(num) {return num*2},
	function(num) {return num*3},
	]

// function that returns multiple alert functions 1

function greeting(firstOrLast) {
	if (firstOrLast === "first") {
		return function(){alert("Hello, bro!");}
	}
	if (firstOrLast === "last") {
		return function(){alert("Good afternoon, Sir");}
	}
}

// function that returns multiple functions 2

function alertMessage(choice) {
	switch(choice) {
    case 1:
        return alert("You chose option 1");
        break;
    case 2:
        return alert("You chose option 2");
        break;
    case 3:
        return alert("You chose option 3");
        break;
    case 4:
        return alert("You chose option 4");
        break;
    default:
    	return alert("Chose an option between 1 and 4");
	}
}


//one line of code to call function 1

function greeting(firstOrLast) {
	if (firstOrLast === "first") {
		return function(){alert("Hello, bro!");}
	}
	if (firstOrLast === "last") {
		return function(){alert("Good afternoon, Sir");}
	}
}

greeting("first")();

//one line of code to call function 2

function greeting(firstOrLast) {
	if (firstOrLast === "first") {
		return function(){alert("Hello, bro!");}
	}
	if (firstOrLast === "last") {
		return function(){alert("Good afternoon, Sir");}
	}
}

greeting("last")();


// Array of Functions + input of function into function + looop 1

// Array of Functions + input of function into function + looop 2

// Array of Functions + input of function into function + looop 3

