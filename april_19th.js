// Using a Closure I - 1

var oldBooks = 200;

function bookCountAlert (newBooks){
	var currentBooks = newBooks + oldBooks;
	function alertMess() {
		return alert("You now have "+currentBooks+" books!");
	};
	return alertMess();
};

var booksToday = bookCountAlert(0);


// Using a Closure I - 2

var oldBooks = 200;

function bookCountAlert (newBooks){
	var currentBooks = newBooks + oldBooks;
	return function() {
		alert("You now have "+currentBooks+" books!");
	};
};

var booksToday = bookCountAlert(0);


// Using a Closure I - 3

var currentMonthAlert = function(){
	var date = "0";
	while (date.length != 8){
		date = prompt("Please insert the date in MM/DD/YY format.");
	};	
	switch(date[3]+date[4]) {
    case "01":
        date = "January";
        break;
    case "02":
        date = "February"
        break;
    default: 
    	date ="Hmm... Is that a real month?"
	}
	return function(){
		alert("The current month is "+date+".");
	}
};

var monthAlert = currentMonthAlert()();

// Building a Closeure II

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!");
  };
}

// Building a Closeure II - 1

function warningMaker(obstacle, number, location){
	return function () {
		alert("Warning! Do not go to the "+location+". There have been "+number+" sitings of "+obstacle+" there!");
	}
};

// Building a Closeure II - 2

function shoesLeft(shoesWearing) {
	return function(shoesTaken) {
		if(shoesWearing==="blue" || shoesTaken==="blue"){
			console.log("The blue shose are taken");}
		return "All shoes are available.";
}
}

// Building a Closeure II - 3

function findCSS() {
	return function(code1) {
		var cssPosition = code1.indexOf("CSS");
		return cssPosition
	};
}


// Using a Closure II - 1

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!");

  };
}

var yetiWarning = warningMaker("Yeti")(4, "Pizza Hut");

// Using a Closure II - 2

function shoesLeft(shoesWearing) {
	return function(shoesTaken) {
		if(shoesWearing==="blue" || shoesTaken==="blue"){
			console.log("The blue shose are taken");}
		else {return "All shoes are available.";}
}
}

var wearingBlue = shoesLeft("blue");

// Using a Closeure II - 3

var string = "There is no CSS in this text!"

function findCSS() {
	return function(code1) {
		var cssPosition = code1.indexOf("CSS");
		return cssPosition
	};
}


// Calling Closures Practice


var string = "There is no CSS in this text!"

function findCSS() {
	return function(code1) {
		var cssPosition = code1.indexOf("CSS");
		return alert(cssPosition);
	};
}

var findCSSFunction = findCSS()(string);

// 2

var number = 4;
var location = "Pizza Hut";

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!");
    
  };
}

// Changing a Bound Value I

function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count = count+1;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\nThis is alert #"+ count +" today for "+obstacle+" danger.");
  };
}

var fuzzyWarning = warningMaker("Fuzzy Bear(s)");


// Changing a Bound Value I - 1


function shoesLeft(shoesWearing) {
	var count = 0;
	return function(shoesTaken) {
		count++;
		if(shoesWearing==="blue" || shoesTaken==="blue"){
			console.log("The blue shose are taken");}
		return "All shoes are available."+count;
}
}

var wearingBlue = shoesLeft("Blue");

// Changing a Bound Value I - 2

var string = "There is no CSS in this text!"

function findCSS() {
	count = 0;
	return function(code1) {
		count++;
		var cssPosition = code1.indexOf("CSS");
		return alert(cssPosition+" "+count);
	};
}

var findCSSFunction = findCSS()(string);

// Changing a Bound Value I - 3

var string = '<!DOCTYPE html>'+
'<head>'+
  '<meta charset="utf-8">'+
  '<title>Jasons Resume</title>'+
  '<link href="css/style.css" rel="stylesheet" type="text/css">'+
  '<script src="js/jQuery.js"></script>'+
  '<script src="js/helper.js"></script>';




var extractTags = function (stringOfCode){
	var count = 0;
	var position = 0;
	while(tagStart !== -1 || tagEnd !== -1) {
		var tagStart = stringOfCode.indexOf("<", position);
		var tagEnd = stringOfCode.indexOf(">", position);
		position = tagEnd + 1;
		count++;
		console.log("Tag #"+count);
		console.log(stringOfCode.slice(tagStart, tagEnd+1));
		if(tagStart == -1 || tagEnd == -1) {
			return function(){
				alert("This is the end. There are "+count+" HTML tags in this string.");
			};
			}

	}
};





