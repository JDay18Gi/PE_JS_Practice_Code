// modulus operator: %

20%50

23%3

//boolean values

40 != 20


//Looping a Triangle

a*2

var i = 0;
while (i < 8) {
	var count = i+1;
	
	while(count > 0) {
		console.log('#');
		count--;
	}
	
	console.log('\n');
	i++;
};

//2

var hash = "#";
for(var row = 1; row < 8; row++) {
	console.log(hash);
	hash += "#";
};

for(var line= "#"; line.length < 8; line += "#") {
	console.log(line);
}

//FizzBuzz

for(var i = 1; i < 101; i++) {
	if (i%3 === 0 || i%5 === 0) {
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz");
		} else {
			if(i%3 === 0) {
				console.log("Fizz");
			} else {
				console.log("Buzz");
			};
		};
	} else {
		console.log(i);
	};
};

//Chess Board
var bord = "";
for(var i = 1; i < 73; i++) {
	if (i%9 === 0 ){
		bord += "\n";
	} else if ( i%2 === 0 ) {
		bord += " ";
	} else {
		bord += "#";
	};
};
console.log(bord);

// Code School Section 3


