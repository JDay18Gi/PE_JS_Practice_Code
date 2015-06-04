//immediately calling functions

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

//4 into the 3rd function then into the last function

alert(puzzlers[3](puzzlers[2](4)));

/// 0 in the first into the third, into the second

alert(puzzlers[1](puzzlers[2](puzzlers[0](0))));


//Tracing Closures 0

function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);

//Tracing Closures 0.2

var mystery = function() {
  var secret = 6;
  var mystery2 = function(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);

//Tracing Closures 1 - water

var drinkWater = function() {
	var thirsty = "drink 1 gallon!";
	function howMuchWater(name) {
		return name+", "+thirsty;
	}
	return howMuchWater;
};

//Tracing Closures 2 - water options

function drinkWater(thirsty) {
	var veryThirsty = "drink 1 gallon!";
	var notThirsty = "you don't need any water.";
	function addName(name) {
		if(thirsty === "thirsty"){
			return name+", "+veryThirsty;
		}
		else {
			return name+", "+notThirsty;
	}
}
	return addName
}

//Tracing Closures 3 - number function

function makeNumBig(num){
	var multiply = num*10;
	var add = num+999;
	var sub = num-109;
	var result = function() {
		return multiply+add+sub;
	}
	return result;
};

// Tracing Closures II - Alteration 1

function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);

console.log(hidden(2));
console.log(mystery(2)(4));

// Tracing Closures II - 1

function furnitureToPolish(totalFurniture) {
	var total = totalFurniture;
	function furnitureLeft(furnitureCompleted) {
		var completed = furnitureCompleted;
		return total - completed
	}
	return furnitureLeft;
}

// Tracing Closures II - 2

function addArticle(word) {
	var wordStr = word;
	var a = "a ";
	var an = "an ";
	function findNextWord(){
		if(wordStr[0] == "a"){
			return an+wordStr;
		} else {
			return a+wordStr;
		}
	}
return findNextWord;
}


// Tracing Closures II - 3

function makeSmall(bigNum) {
	var sub = bigNum - 100;
	var small = bigNum * 1;
	var zero = bigNum * 0;
	function addNum(smNum) {
		return smNum + (sub - small) * zero;
	}
return addNum;
}

// traacing Closures III - 1, 2, & 3

function team(input) {
  var secret = 4;
  input += 100;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function other(param) {
  function mystery4(bonus) {
    return param(4) + bonus;
  }
  return mystery4;
}

var hidden = team(3);
var jim = other(hidden);
var result = jim(9);


// Building a Closure I

var vitaminReminder = function(vitaminType) {
	return function(){
		alert("Don't forget to take your "+vitaminType+" vitamins!");
	};
};

var superVitaminReminder = function(vitaminType) {
	return function(day) {
		alert("Today is "+day+". Don't forget to take you "+vitaminType+" vitamins.");
	};
}

var vitReminder = function(type) {
	return function(day) {
		return function(name){
			alert(name+", today is "+day+". Don't forget to take you "+type+" vitamins.");
	};
		}
	}