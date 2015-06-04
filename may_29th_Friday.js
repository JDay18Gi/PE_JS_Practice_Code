
var p = function(num){
	while(num < 10) {
		console.log(num);
		num += 1;
	};
};

var alert = function() {
	alert("Hey there!");
};

var alert1 = function() {
	num = 0;
		while(num<10) {
			console.log(num);
			num += 1;
		};
};

//return string of found letters//

var alert3 = function(string) {
	var i = 0;
	var newString = "";
	while (i<string.length) {
		if ((string.charAt(i) === "a") | (string.charAt(i) === "A")) {
			newString = newString + string.charAt(i);
		};
		i += 1;
	};
	return newString;
};

//return position of discovered letter//

var alert3 = function(string) {
	var i = 0;
	var newArray = [];
	while (i<string.length) {
		if ((string.charAt(i) === "a") | (string.charAt(i) === "A")) {
			newArray.push(i);
		};
		i += 1;
	};
	return newArray;
};

alert3("A Apple Application");

