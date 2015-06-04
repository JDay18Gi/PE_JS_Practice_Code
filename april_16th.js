var helloName = function(lastname, firstname){
	alert("Hello, "+firstname+". Or should I say Mr. "+lastname+"?");
}

helloName = function(lastname, firstname, gender){
	if(gender == "male"){
		alert("Hello, "+firstname+"... or should I say Mr. "+lastname+"?");
	} else{
		alert("Hello, "+firstname+"... or should I say Ms. "+lastname+"?");
	}
};

helloName = function(){
	var name = prompt("What is your name?");
	var gender = "none"
	while(!((gender == "Male") || (gender == "Female"))){
	gender = prompt("Please state your gender 'Male' or 'Female'?");
}
};

var theFruit = function(numApples, numOranges) {
	var fruit = numApples + numOranges;
	return fruit
};

var isPhoneNumber = function(phoneNumber) {
	if(phoneNumber.length === 10){
		return phoneNumber+" is a phone number!";
	} else {
		return phoneNumber+" is NOT a phone number!";
	}
};

function isPhoneNumber (phoneNumber){
	var stringNumber = phoneNumber.toString();
	if(stringNumber.length === 10){
		return phoneNumber+" is a phone number!";
	} else {
		return phoneNumber+" is NOT a phone number!";
	}
}


var phoneNumber = function(phoneNumber){
	var stringNumber = phoneNumber.toString();
	if(stringNumber.length === 10){
		return phoneNumber+" is a phone number!";
	} else {
		return phoneNumber+" is NOT a phone number!";
	}
};


var studyScore = function(time, method, motivation) {
	return (time+method+motivation)/3;
};

var time = 5;
var method = 10;
var motivation = 12;

var jasonStudyScore = studyScore(time, method, motivation);
console.log(jasonStudyScore);


var iPodValue = function(age, use, generation) {
	var ageVal = (5-age)*10;
	var useVal = (10-use)*20;
	var genVal = generation*50;
	var total =  ageVal + useVal + genVal;
	return total;
};

//jaysPod
var age = 1.5
var use = 6
var gen = 3
console.log("JaysPod value is: "+iPodValue(age,use,gen));

//jays1stPod
var age = 5
var use = 8
var gen = 1
console.log("Jays1stPod value is: "+iPodValue(age,use,gen));


//NewPod
var age = 0
var use = 0
var gen = 8
console.log("NewPod value is: "+iPodValue(age,use,gen));

///Displaying  the contents of functions

helloName = function(){
	var name = prompt("What is your name?");
	var gender = "none"
	while(!((gender == "Male") || (gender == "Female"))){
	gender = prompt("Please state your gender 'Male' or 'Female'?");
	if(gender === "Male") {
		alert("Good day to you "+name+" or should I say, Mr. "+name+"?");
	} else {
		alert("Good day to you "+name+" or should I say, Ms. "+name+"?");
	}
}
};


/// Passing Function Expression Variables as Parameters

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear<200) {
  return confirm("Fear Level: LOW\nStill wanna 			ride?");
  }
  if(fear<=300) {
  return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
  if(fear<400) {
  return confirm("Fear Level: HIGH\nHave a death wish?");
  }
  };

function confirmRide(confirmToGo) {
  return confirmToGo();
}

  confirmRide(fearMessage);
  
var startRide = confirmRide(fearMessage);

///budget function attempt

var monthSpending = function(foodExpen,carExpen,otherExpen) {
	var monthSpending
}

var weekSpending = function(monthSpending, remainingweeks) {
	var foodExpen = monthSpending/remainingWeeks;
	var carExpen = monthSpending/remainingWeeks;
	var otherExpen = monthSpending/remainingWeeks; 
};