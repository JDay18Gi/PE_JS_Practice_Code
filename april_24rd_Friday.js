var hash = "#";
for(var i = 0; i < 8; i++){
	console.log(hash);
	hash += "#";
}
//

var hash = "#";

var hashTrangle = function(){
	for(var i = 0; i < 7; i++){
		console.log(hash);
		hash += "#";
}
};

//self contained
var hashTrangle = function(){
	var hash = "";
	for(var i = 0; i < 7; i++){
		console.log(hash);
		hash += "#";
}
};

var fizzBuzz = function(){
	for(var i = 0; i <= 100; i++){
		if((i % 3 === 0) && (i % 5 === 0)){
			console.log("FizzBuzz")
		}
		else if(i % 3 === 0){
			console.log("Fizz")
		}
		else if (i % 5 === 0){
			console.log("Buzz")
		}
		else{
			console.log(i);
		}
	}//end for
};

// 8 by 8 chessboard

var chessBoard = function(){
	for(var i = 0; i < 4; i++){
		var row1 = "";
		for(var j = 1; j < 9; j++){
			if(j % 2 === 0 ){
				row1 +=" ";
			}
			else {
				row1 +="#";	
			};	
			if(j === 8){
				console.log(row1);
			}
		}//end for
		var row2 = "";
		for(var j = 1; j < 9; j++){
			if(j % 2 === 0 ){
				row2 +="#";
			}
			else {
				row2 +=" ";	
			};
			if(j === 8){
				console.log(row2);
			}
		}//end for
	}//end for
};

// x by y chessboard

var chessBoard = function(height, width){
	for(var i = 0; i < height; i++){
		var row1 = "";
		if(i % 2 === 0 ){
			for(var j = 1; j < (width+1); j++){
				if(j % 2 === 0 ){
					row1 +=" ";
				}
				else {
					row1 +="#";	
				};	
				if(j === (width)){
					console.log(row1);
				}
			}//end for
		}//end if
		else{
			var row2 = "";
			for(var j = 1; j < (width+1); j++){
				if(j % 2 === 0 ){
					row2 +="#";
				}
				else {
					row2 +=" ";	
				};
				if(j === (width)){
					console.log(row2);
				}
			}//end for
		}
	}//end for
};


var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "#";
    else
      board += " ";
  }
  board += "\n";
}

console.log(board);

var string = prompt("Say something!");
if(!(Number(string) === "NaN")){
	console.log("No, say SOMETHING!");
}
else {
	console.log("Ok!")
}

// function with local variable same as external

var x = 20;

var xy = function(x, y){
	return x*y;
}

// 

var x = 20;

var xy = function(a, b){
    a = x *2;
    x = 1;
	return a*b;
}

console.log(x);



var x = 20;

console.log(y());
console.log(x);


x = 30
function y(){
	return 20
}

console.log(y());
console.log(x);

var exFunction = function(num, exp){
	var result = 1;
	for(var i = 0; i < exp; i++){
		result *= num;
	}//end for
	return result;
};//end func

var min = function(num1, num2){
	if(num1 > num2){
		return num2;
	} else {
		return num1;
	}
};//end func

//

var isEven = function(n){
	var a = n*n;
	function ice(a){
		a -=2;
		if(a === 1){
			return false;
		} else if(a === 0 ){
			return true;
		} else {
			return ice(a);
		}
	}//end func
	return ice(a);
};//end func

function positive(a){
	return a*a;
}

function isEven(a){
		a -=2;
		if(a === 1){
			return false;
		} else if(a === 0 ){
			return true;
		} else {
			return isEven(a);
		}
}//end func


// Evo1
var string = "B there lots of Bees in Be Be Bee Bee";

var count = 0;
if(string.charAt(0) === "B"){
			count++;
			console.log(count);
		}//end if

//Evo2
var string = "B there lots of Bees in Be Be Bee Bee";

	var count = 0;
	for(var i = 0; i < string.length; i++){
			if(string.charAt(i) === "B"){
				count++;
				console.log(count);
			}//end if
		}// end for

//Evo3

var string = "B there lots of Bees in Be Be Bee Bee";

function countBs(string){
	var count = 0;
	for(var i = 0; i < string.length; i++){
			if(string.charAt(i) === "B"){
				count++;
			}//end if
		}// end for
		return count;
}

countBs(string);

/// any letter


var string = "B there lots of Bees in Be Be Bee Bee";

function countLetter(string, letter){
	var count = 0;
	for(var i = 0; i < string.length; i++){
			if(string.charAt(i) === letter){
				count++;
			}//end if
		}// end for
		return count;
}

countLetter(string);
