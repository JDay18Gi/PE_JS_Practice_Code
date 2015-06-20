//  Chapter 3 in Eloquent JavaScript Exercises

// Create Minimum function

function mathMin(a, b) {
	if (a >= b) {
		return b;
	} else {
		return a;
	}
}

mathMin(10,5);

mathMin(5,5);

mathMin(10,10);

mathMin(100, 250);


// Create a Recusion function that determins even or odd

function evenOrOdd(a) {
	if (a < 0) {
		a *= -1;
	}
	if(a === 0) {
		return "even";
	} else if (a === 1) {
		return "odd";
	} else {
		a -= 2;
		return evenOrOdd(a);
	}
}


// count B's function

function countBs(string) {
	bNum = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === "B") {
			bNum++;
		}
	}
	return bNum;
}


function countLetter(string, letter) {
	var bNum = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === letter) {
			bNum++;
		}
	}
	return bNum;
}
