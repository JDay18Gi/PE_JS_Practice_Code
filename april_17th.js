///budget function attempt

var monthlyFoodTotal = 1000
var monthlyCarTotal = 400
var monthlyOtherTotal = 600


var aprilSpending = function(foodExpen,carExpen,otherExpen) {
	var monthFoodRem = monthlyFoodTotal - foodExpen;
	var monthCarRem = monthlyCarTotal - carExpen;
	var monthOtherRem = monthlyOtherTotal - otherExpen;
	var aprilAmounts = []
	aprilAmounts.push(monthFoodRem, monthCarRem, monthOtherRem);
	console.log("aprilAmounts = ");
	return aprilAmounts;
};

var weekSpending = function(monthSpending, remainingWeeks) {
	var foodExpen = monthSpending[0] / remainingWeeks;
	var carExpen = monthSpending[1] / remainingWeeks;
	var otherExpen = monthSpending[2] / remainingWeeks;
	console.log("You can spend $"+foodExpen+" on food per week in the remaining "+remainingWeeks+" weeks.");
	console.log("You can spend $"+carExpen+" on car expenses per week in the remaining "+remainingWeeks+" weeks.");
	console.log("You can spend $"+otherExpen+" on other expenses per week in the remaining "+remainingWeeks+" weeks.");	
};

weekSpending(aprilSpending(400,200,100), 2);



weekSpending(aprilSpending, 2)

function fullToFirstName(fullName) {
	var nameArray = fullName.split(" ");
	return nameArray[0];
}

function websiteGreeting(fullName, age) {
	if(age < 10) {
		alert(fullName + ", you are too young for any of our academic porgrams. Come back in a few years!");
	}
	else if((age < 18) && (age > 9)) {
		alert(fullName + ", you are a good candidate for our accellerated highschool program!");
	}
	else{
		alert(fullName+", check out our college porgrams!");
	}
}


var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear<200) {
    confirm("Fear Level: LOW\nStill wanna ride?");
  }
  else if(fear<301) {
    confirm("Fear Level: MEDIUM\nThink you'll make it?");
    }
  else{
     confirm("Fear Level: HIGH\nHave a death wish?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

confirmRide(fearMessage);

var startRide = confirmRide(fearMessage());


var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(
  function(arrayCell){
    return arrayCell[0]+" "+arrayCell[1];
  }
);


var passengers2 = [ ["Meeks", "Thomas"],
              ["Gregg", "Pollack"],
              ["Christine", "Wong"],
              ["Dan", "McGaw"] ];

var modifiedNames2 = passengers2.map(
	function(arrayCell) {
		return arrayCell[1]+", "+arrayCell[0];
	}
	);



list = [4, 5, 10, 100, 200]

list.map(
	function(num){
		num = 100;
		return num
	}
	)


var list1 = [4, 5, 10, 100, 200]

var list100 = list1.map(
	function(num){
		num = 100;
		return num
	}
	);


var names = [	["Jason", "male"],
				["Joe", "male"],
				["Jessica", "female"],
				["Laura", "female"],]

var formalNames = names.map(
	function(cell) {
		if(cell[1] === "male") {
		return "Mr. "+cell[0];
		} else {
			return "Ms. "+cell[0];
		}
	}
	);


var names = [	["Jason", "male"],
				["Joe", "male"],
				["Jessica", "female"],
				["Laura", "female"],]

var formalNames = names.map(
	function(cell) {
		if(cell[1] === "male") {
		return "Mr. "+cell[0];
		} else {
			return "Ms. "+cell[0];
		}
	}
	);


var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

var greeting = modifiedNames.map(
  function(cell) {
  return alert(cell);
  }
  );

////Name Functions

var listNames = [var nameArray = "Jason GIrard", var otherArray = "Not Jason"]



var nameFunctions = [
  function(fullName){
 	return fullName.split(" ");
 },
  function(fullName){
 	nameArray = fullName.split(" ");
 	return nameArray[0];
 },
  function(fullName){
 	nameArray = fullName.split(" ");
 	return nameArray[1]; 
 },
 ]

nameFunctions[0]("Jason Girard")


// Array of Functions 2
// Vitamin Amount

var vitaminAmount = function(vitName) {
	if(vitName === "HSO") {
		return vitaminFunctions[0]();
	}
	else if(vitName === "FD") {
		return vitaminFunctions[1]();
	} 
	else {
		return vitaminFunctions[2]();
	}
};

///Run Function based on type


var vitaminFunctions = [
function(){
	alert("Take 5 per day, 3 in the morning and 2 at night.");
},
function(){
	alert("Take 9 per day, 3 per meal.");
},
function(){
	alert("I don't know about that viatmin. I'm sorry I couldn't help.");
}
]

// Array of Functions 3
// Exercise Function


var dayOfWeek = function(day) {
	if((day === "Tuesday") || (day === "Saturday")) {
		return exerciseFunctions[0](day);
	} else {
		return exerciseFunctions[1](day);
	}
};


var exerciseFunctions = [
function(day){
	return "Today is "+day+". You need to run today!";
},
function(day){
	return "Today is "+day+". You do NOT need to run today.";
},
]



function adventureSelector(userChoice) {
  if(userChoice === 1){
    function(){
      return alert("You selected the Vines of Doom!");}
  }
    else if(userChoice === 2){
      function(){
        return alert("Looks like you want the Lake of Despair!");}
    }
      else{
        function(){
          returnalert("The Caves of Catastrophe!");}
}
}


// Returning Functions 1
  // Wardrobe Function

var wardrobeFunction = function(shirtColor) {
	if(shirtColor === "blue"){
		return function(){
			console.log("Wear kakai pants and navy hat.");
		}
	}
	else {
		return function(){
			console.log("Wear jeans and gray hat.");
		}
	}
};


// Returning Functions 2
  //Number manipulation

function numberLargeEnough(num) {
	if(num<100) {
		return function(){
			var newNum = (num+100)*20;
			alert(newNum);};}
	else {
		return function() {
			var newNum = num*20;
			alert(newNum);};}
	}


// Returning Functions 3
    //.css file finder

var code = "The file information team cool awesome."


var findCSS = function(code) {
	if(code.indexOf(".css") > 0){
		return function() {
			var locationCSS = code.indexOf(".css");
			alert("There is a css file lcoated at index "+locationCSS);
		}}
	else {
		return function() {
			alert("There is no css file reference in this code.")
		};
	}
};


// Immediaitely-Invoked Functions
	// Repeat Code 1


var code = "The file information team cool awesome."


var findCSS = function(code) {
	if(code.indexOf(".css") > 0){
		return function() {
			var locationCSS = code.indexOf(".css");
			alert("There is a css file lcoated at index "+locationCSS);
		}}
	else {
		return function() {
			alert("There is no css file reference in this code.")
		};
	}
};

findCSS(code)();

// Immediaitely-Invoked Functions 2
	// 2 Repeat Number Manipulation


function numberLargeEnough(num) {
	if(num<100) {
		return function(){
			var newNum = (num+100)*20;
			alert(newNum);};}
	else {
		return function() {
			var newNum = num*20;
			alert(newNum);};}
	}

numberLargeEnough(100)();


// Immediaitely-Invoked Functions 3
	// Repeat Code Wardrobe

var wardrobeFunction = function(shirtColor) {
	if(shirtColor === "blue"){
		return function(){
			console.log("Wear kakai pants and navy hat.");
		}
	}
	else {
		return function(){
			console.log("Wear jeans and gray hat.");
		}
	}
};

wardrobeFunction("blue")();


// Queues of functions 1

var numberFunctions = [
	function(a) {return a+1},
	function(a) {return a+2},
	function(a) {return a+3},
	function(a) {return a+4},
	]

function functionRun(start, array) {
	for(var count = array.length; count > 0; count--) {
		start = array.shift()(start);
		if(count === 1) {
			return start
		}
	}
}

// Queues of functions 2
// with words


var array2 = [
	function(string) {return "very "+string},
	function(string) {return "very "+string},
	function(string) {return "very "+string},
	function(string) {return "very "+string},
	function(string) {return "very "+string},
]

var veryFunction = function(string, array) {
	for(var count = array.length; count > 0; count--){
		string = array.shift()(string);
		if(count===1){
			return string
		}
	}
};


var array2 = [
	function(string) {return "very "+string},
	function(string) {return "very "+string},
	function(string) {return "very "+string},
	function(string) {return "very "+string},
	function(string) {return "very "+string},
]

var veryFunction = function(string, array) {
	count = array.length;
	while(count>0) {
		string = array.shift()(string);
		count--;
		if(count === 0){
		return string
	} 
	}
};
