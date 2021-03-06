//math functions with multiple calls 1

function easy() {
	var num = 20;
	function easy2(insert) {
		insert += 20;
		return num * insert;
	}
	return easy2;
}

var hidden = easy();
var result = hidden(2);

//math functions with multiple calls 2

var a = 20;
function moderate() {
	function mod2(num) {
		insert = a + num;
		return insert;
	}
	return mod2;
}

var hidden = moderate();
var result = hidden(2)

//math functions with multiple calls 3


var a = 20;
function moderate(b) {
	function mod2(num) {
		insert = a + num*b;
		return insert;
	}
	return mod2;
}

var hidden = moderate(3);
var result = hidden(2)

result

Answer: 26

//math functions with multiple calls second 1

function mystery(input) {
	var secret = 5;
	function mystery2(num) {
		input *= input;
		return secret * num;
	}
	return mystery2;
}
var hidden = mystery(1);
var result = hidden(5);

alert(result);

Answer = 25

//math functions with multiple calls second 2
var care = 5;
function mystery(change) {
	function mystery2(change1) {
		function mystery3(change2) {
			return change1*change2*care;
		}
		return mystery3;
	}
	return mystery2;
}

var hidden1 = mystery(4)(1);
var result = hidden1(2);

alert(result);

Answer = 10

//math functions with multiple calls second 3

function look(into) {
	var secret = 5;
	function look2(multiple) {
		multiple *= into;
		return secret * multiple;
	}
	return look2;
}

var peace = look(1)(2);

alert(peace);


Answer = 10;


// return alert function 1

function weatherAlert (weather) {
	return function() {
		alert("Today the weather is "+weather+".");
	};
}

// return alert function 2

function rainAlert (chanceOfRain) {
	return function() {
		alert("Today there is a "+chanceOfRain+" chance of rain!");
	};
}


// return alert function 3

function rainAlert (chanceOfRain, timeOfDay) {
	return function() {
		alert("There is a "+chanceOfRain+" chance of rain for "+timeOfDay+"!");
	};
}

//store specific function and call function 1

function weatherAlert (weather) {
	return function() {
		alert("Today the weather is "+weather+".");
	};
}

var sunnyWeather = weatherAlert("sunny");

sunnyWeather();

//store specific function and call function 2

function rainAlert (chanceOfRain) {
	return function() {
		alert("Today there is a "+chanceOfRain+" chance of rain!");
	};
}

var twenty = rainAlert("20%");

twenty();


//store specific function and call function 3

function rainAlert (chanceOfRain, timeOfDay) {
	return function() {
		alert("There is a "+chanceOfRain+" chance of rain for "+timeOfDay+"!");
	};
}

var afternoonRain = rainAlert("20%", "afternoon");

afternoonRain();


//BUIDLING A CLOSURE 2;

// add two inputs and test

function weatherAlert (weather) {
	return function(wind, city) {
		alert("Today in "+city+" the weather is "+weather+" and with wind is "+ wind +".");
	};
}

var sunnyWeather = weatherAlert("sunny")("extreme", "Jupiter, FL");

sunnyWeather;

// add two inputs and test 2

function rainAlert (chanceOfRain) {
	return function(thunder, lightning) {
		alert("Today there is a "+chanceOfRain+" chance of rain "+thunder+" chance of thunder "+lightning+" chance of lightning!");
	};
}

var twenty = rainAlert("20%")("10%", "100%");

twenty;

//using a closure II

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

killerPenguinAlert(6, "Ice Caves");

snowYetiAlert(1, "Blizzard Beach");

//call every function

killerPenguinAlert(20, "beach");
polarBearAlert(2, "eating pancakes at the lodge");
icebergAlert(3, "at the ice rink");
flashBlizzardAlert(1, "across the state of Florida");
snowYetiAlert(2, "taking over the world");

// add count 1

function weatherAlert (weather) {
	var count = 0;
	return function(wind, city) {
		alert("Today in "+city+" the weather is "+weather+" and with wind is "+ wind +".");
		count++;
		alert("warning #"+count);
	};
}


function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #"+count+" today for "+obstacle+" danger."

    );
  };
}

warningMaker("iceberg")(5, "Jupiter");

// BEGIN OBJECT EXERCISES
// BEGIN OBJECT EXERCISES
// BEGIN OBJECT EXERCISES
// BEGIN OBJECT EXERCISES
// BEGIN OBJECT EXERCISES
// BEGIN OBJECT EXERCISES

// creat object literals 1
// creat object literals 2
// creat object literals 3


var BlogPost = {
	title: "The title",
	content: "This is the contnet.",
	images: ["image1.png", "image2.png", "image3.png"]
};

var Economist = {
	url: "http://www.economist.com/",
	searchLocation: ".mh-shirt",
	articleContent: "div .main-content"
};

var Forbes = {
	name: "Forbes",
	url: "http://www.forbes.com/",
	searchLocation: ".search",
	articleContent: ".article-injected-body"
};

/// loop through and find item 1

var objects = [BlogPost, Economist, Forbes];

function returnURL(name, list) {
	for(var i = 0; i < list.length; i++) {
		console.log(i);
		if (name === list[i].name) {
			console.log(list[i].url);
		}
	}
};

returnURL("Forbes", objects);

/// loop through and find item 2

var objects = [BlogPost, Economist, Forbes];

function returnURL(name, list) {
	for(var i = 0; i < list.length; i++) {
		console.log(i);
		if (name === list[i].name) {
			console.log(list[i]["url"]);
		}
	}
};

returnURL("Forbes", objects);


/// loop through and find item 3

var book = {
	title: "title",
	eval: "boring",
	other: "message"
}

function searchBook(object) {
	for (property in object) {
		if (object.property = "boring") {
			return "Throw away this object";
		}
	}
}

// remove properties add array and find item within array 1

var BlogPost = {
	title: "The title",
	content: "This is the contnet.",
	images: ["image1.png", "image2.png", "image3.png"]
};

var Forbes = {
	name: "Forbes",
	url: "http://www.forbes.com/",
	searchLocation: ".search",
	articleContent: ".article-injected-body"
};

delete Forbes.name;

Forbes.name;

Forbes.name = ["Forbes", "Magazine"];

Forbes.name[1];
Forbes["name"][1];


// remove properties add array and find item within array 2

var Economist = {
	url: "http://www.economist.com/",
	searchLocation: ".mh-shirt",
	articleContent: "div .main-content"
};

delete Economist.url;

Economist.url;

Economist.url = ["www", "ddd", "ccc"]

Economist.url[0]


// remove properties add array and find item within array 3

var BlogPost = {
	title: "The title",
	content: "This is the contnet.",
	images: ["image1.png", "image2.png", "image3.png"]
};

delete BlogPost["title"];

BlogPost.title;

BlogPost["title"] = "title";

BlogPost.title;


// function to create an ojbect within a object 1


var BlogPost = {
	title: "The title",
	content: "This is the contnet.",
	images: ["image1.png", "image2.png", "image3.png"]
};

function addTags(post, category, tagsArray) {
	post.tags = {
		"category": category,
		"tags": tagsArray
	};
}

addTags(BlogPost, "Economics", ["velocity", "inflation", "oil"]);

BlogPost.tags.category;

BlogPost.tags.tags[1];




// function to create an ojbect within a object 2

var Economist = {
	url: "http://www.economist.com/",
	searchLocation: ".mh-shirt",
	articleContent: "div .main-content"
};

function addKeyWords(publication, keytermsArray) {
	publication.keyWords = {
		searchLocation: publication.searchLocation,
		keyterms: keytermsArray
	};
}

addKeyWords(Economist, ["inflation", "money", "middle-east"]);

Economist.keyWords.searchLocation;

Economist.keyWords.keyterms[2];

// function to create an ojbect within a object 3

var Forbes = {
	name: "Forbes",
	url: "http://www.forbes.com/",
	searchLocation: ".search",
	articleContent: ".article-injected-body",
	numHits: 0
};



function addHit (publication, word, location) {
	publication.numHits++;
	publication["hit"+publication.numHits] = {
		word: word,
		location: location
	}
}

addHit(Forbes, "velocity", "bottom");

addHit(Forbes, "velocity", "top");

Forbes.hit2.location;


// add function to object 1

var BlogPost = {
	title: "The title",
	content: "This is the contnet.",
	images: ["image1.png", "image2.png", "image3.png"],
	addTags: function(category, tagsArray) {
		this.tags = {
			"category": category,
			"tags": tagsArray
		};
	}
};


BlogPost.addTags("Economics", ["velocity", "inflation", "oil"]);

BlogPost.tags.category;

BlogPost.tags.tags[1];


// add function to object 2

var Economist = {
	url: "http://www.economist.com/",
	searchLocation: ".mh-shirt",
	articleContent: "div .main-content",
	addKeyWords: function(keytermsArray) {
		this.keyWords = {
			searchLocation: this.searchLocation,
			keyterms: keytermsArray
		};
	}
};



Economist.addKeyWords(["inflation", "money", "middle-east"]);

Economist.keyWords.searchLocation;

Economist.keyWords.keyterms[2];


// add function to object 3

var Forbes = {
	name: "Forbes",
	url: "http://www.forbes.com/",
	searchLocation: ".search",
	articleContent: ".article-injected-body",
	numHits: 0,
	addHit: function( word, location) {
		this.numHits++;
		this["hit"+this.numHits] = {
			word: word,
			location: location
		};
	}
};



Forbes.addHit("velocity", "bottom");

Forbes.addHit("velocity", "top");

Forbes.hit2.location;


//add new function to object 1

var BlogPost = {
	title: "The title",
	content: "This is the contnet.",
	images: ["image1.png", "image2.png", "image3.png"],
	addTags: function(category, tagsArray) {
		this.tags = {
			"category": category,
			"tags": tagsArray
		};
	}
};

BlogPost.changeContent = function(newContnet) {
	this.content = newContnet;
}

BlogPost.changeContent("This is the new content!");

BlogPost.content;


//add new function to object 2


var Economist = {
	url: "http://www.economist.com/",
	searchLocation: ".mh-shirt",
	articleContent: "div .main-content",
	addKeyWords: function(keytermsArray) {
		this.keyWords = {
			searchLocation: this.searchLocation,
			keyterms: keytermsArray
		};
	}
};

Economist.deleteProperty = function(property) {
	delete this[property];
}

Economist.deleteProperty("url");

Economist.url;

//add new function to object 3


var Forbes = {
	name: "Forbes",
	url: "http://www.forbes.com/",
	searchLocation: ".search",
	articleContent: ".article-injected-body",
	numHits: 0,
	addHit: function( word, location) {
		this.numHits++;
		this["hit"+this.numHits] = {
			word: word,
			location: location
		};
	}
};

Forbes.addtoHits = function(num) {
	this.numHits += num;
}

Forbes.addtoHits(5);

Forbes.numHits;

