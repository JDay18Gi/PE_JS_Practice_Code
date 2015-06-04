// join method

var myArray = ["strin1", "string2", "string3", "string4"]
myArray = myArray.join();
console.log(myArray);

myArray = myArray.join(" and ");
console.log(myArray);

myArray = myArray.join(" but not ");
console.log(myArray);



/// Page 63

var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);

console.log(day1.wolf);
day1.wolf = false;

console.log(day1.wolf);

//2nd one

var week1 = {
	progress: 20,
	events: ["practic coding", "code academy", "code school", "boss coding"]
};

console.log(week1.progress);
console.log(week1.events);
console.log(week1.study);

week1.study = "false";

console.log(week1.study);

// delete

var week1 = {
	progress: 20,
	events: ["practic coding", "code academy", "code school", "boss coding"]
};

delete week1.events;
console.log(week1.events);

// page66

var journal = [];

function addEntry(events, didITurnIntoASquirrel){
	journal.push({
		events: events,
		squirrel: didITurnIntoASquirrel
	});
}


addEntry(["teeth", "peanutbutter", "keli", "sad day"], true);

// push objects to array x 3

myArray = []


/// page 69



function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
	var table = [0, 0, 0, 0];
	for (var i = 0; i < journal.length; i++) {
		var entry = journal[i], index = 0;
		if (hasEvent(event, entry)) index += 1;
		if (entry.quirrel) index += 2;
		table[index] += 1;
		}
	    return table;
	}



//His Function

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

/// The Sum of a Range



function rangeSum(start, end){
	var array = [];
	for(var i = start; i <= end; i++){
		array.push(i);
	}
	return array;
}

// page 78 - Sum of a Range

function rangeSum(start, end){
	var sum = 0;
	for(var i = start; i <= end; i++){
		sum += i
	}
	return sum;
}

//Bonus

function rangeSum(start, end, step){
	var array = [];
	if(step === undefined){
		for(var i = start; i <= end; i++){
		array.push(i);
	}}else if(step < 0){
		for(var i = start; i >= end; i+=step){
		array.push(i);
	}}else{
		for(var i = start; i <= end; i = i+=step){
			array.push(i);
			}
		}
	return array;
}

var reverseArray = function(array){
	newArray = [];
	for(value in array){
		var lastItem = array.pop();
		newArray.push(lastItem);
	}
	return newArray
};


var reverseArray = function(array){
	newArray = [];
	while(array.pop === true) {
		var lastItem = array.pop();
		newArray.push(lastItem);
	};
	return newArray;
};

console.log([1,2,3,4,5].legnth)

// print every item in array
var reverseArray = function(array){
	newArray = [];
	var duration = array.length;
	for(var i = 0; i < duration; i++){
		var lastItem = array.pop();
		newArray.push(lastItem);
	}
	return newArray
};

//reduced
var reverseArray = function(array){
	var newArray = [], duration = array.length;
	for(var i = 0; i < duration; i++){
		newArray.push(array.pop());
	}
	return newArray
};

//reverse same array

var reverseArray = function(array){
	var newArray = [], duration = array.length;
	for(var i = 0; i < duration; i++){
		newArray.push(array.pop());
		array.unshift(newArray.pop());
		console.log(array);
	}
	return array
};

var reverseArray = function(array){
	var newArray = [], duration = array.length;
	for(var i = 0; i < duration; i++){
		newArray.push(array.pop());
	}
	array = newArray;
	return array;
};

//p.79 lists

var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}	
};

list.rest.rest.rest = 20

console.log(list.rest.rest.rest);


{value: array[1],
	rest:


var arrayToList = function(array){
	duration = array.length;
	var list1 = {};
	list1.value = 1;
	list1.rest = {};
	list1.rest.value = 2;
	list1.rest.rest = {};
	list1.rest.rest.value = 3;
	list1.rest.rest.rest = null;
	return list1
};


var arrayToList = function(array){
	duration = array.length;
	var list1 = {};
	for(var i = array; i < duration; i++){
	list1.["rest."*i]value = 1;
	list1.rest = {};
	list1.rest.value = 2;
	list1.rest.rest = {};
	list1.rest.rest.value = 3;
	list1.rest.rest.rest = null;
	return list1
}
};


var i = 0


function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}


function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}



