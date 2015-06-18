var publicationList = [
	{name: "Mises Daily", owner:"Mises.org", published:"365"},
	{name: "Freedman", owner: "FEE", published: "4"},
	{name: "WSJ", owner:"WSJ", published: "365"},
	{name: "Economist", owner:"Economist", published: "52"}
];


// Prototype function creation 1
Array.prototype.countYearlyReading = function() {
	var pubCount = 0;
	for (var i = 0; i < this.length; i++) {
		pubCount += parseInt(this[i].published);
	}
	return pubCount;
};

publicationList.countYearlyReading();


// Prototype function creation 2

Array.prototype.countWeeklyReading = function() {
	var pubCount = 0;
	for(var i = 0; i < this.length; i++) {
		pubCount += parseInt(this[i].published);
	}
	return pubCount/52;
};

publicationList.countWeeklyReading();

// Prototype function creation 3


Array.prototype.listOwnerPublications = function(owner) {
	for(var i = 0; i < this.length; i++) {
		if (owner=== this[i].owner){
			console.log(this[i].name);
		}
	}
};

publicationList.listOwnerPublications();


// Prototype function for Object and Array1

var publicationList = [
	{name: "Mises Daily", owner:"Mises.org", published:"365"},
	{name: "Freedman", owner: "FEE", published: "4"},
	{name: "WSJ", owner:"WSJ", published: "365"},
	{name: "Economist", owner:"Economist", published: "52"}
];

Object.prototype.ownerMises = function () {
	if (this.owner === "Mises.org") {
		return true;
	} else {
		return false
		}
};

Array.prototype.totalMises = function () {
	var misesCount = 0;
	for (var i = 0; i < this.length; i++) {
		if(this[i].ownerMises()) {
			misesCount++;
		}
	}
	return misesCount;
};

// Prototype function for Object and Array2

var publicationList = [
	{name: "Mises Daily", owner:"Mises.org", published:"365"},
	{name: "Freedman", owner: "Mises.org", published: "4"},
	{name: "WSJ", owner:"WSJ", published: "365"},
	{name: "Economist", owner:"Mises.org", published: "52"}
];

Object.prototype.misesOwn = function() {
	if (this.owner === "Mises.org") {
		return this.name;
	}
}

Array.prototype.misesPubList = function() {
	misesPublicationArray = [];
	for(var i = 0; i < this.length; i++) {
		if (this[i].misesOwn())
		misesPublicationArray.push(this[i].misesOwn());
	}
	return misesPublicationArray;
}

publicationList.misesPubList();

// Prototype function for Object and Array 3


var publicationList = [
	{name: "Mises Daily", owner:"Mises.org", published:"365"},
	{name: "Freedman", owner: "Mises.org", published: "4"},
	{name: "WSJ", owner:"WSJ", published: "365"},
	{name: "Economist", owner:"Mises.org", published: "52"}
];

Object.prototype.checkOwner = function(owner) {
	if (this.owner === owner) {
		return this.name;
	}
};

Array.prototype.ownerPubList = function(owner) {
	ownerPublicationArray = [];
	for(var i = 0; i < this.length; i++) {
		if (this[i].checkOwner(owner))
		ownerPublicationArray.push(this[i].checkOwner());
	}
	return ownerPublicationArray;
};

publicationList.ownerPubList("Mises.org");

//using general object to create prototype 1

var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

var postHome = Object.create(genericPost);
var postBase = Object.create(genericPost);

//using general object to create prototype 2

var genericShoe = {
	color: undefined,
	size: undefined
}

var sandal = Object.create(genericShoe);
var boot = Object.create(genericShoe);

//using general object to create prototype 3

var genericCar = {
	capacity: undefined,
	color: undefined
}

var sedan = Object.create(genericCar);
var jeep = Object.create(genericCar);

sedan.capacity = 5;
jeep.capacity = 4;

// creat constructor function 1

var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

function Fencepost(x, y, postNum) {
	this.x = x;
	this.y = y;
	this.postNum = postNum;
	this.connectionsTo = [];
	this.sendRopeTo = function(connectedPost) {
		this.connectionsTo.push(connectedPost);
	};
}

var homePost = new Fencepost(5,7, 2);

// creat constructor function 2
var genericShoe = {
	color: undefined,
	size: undefined
}

function Shoe(color, size) {
	this.color = color;
	this.size = size;
}

var boot = new Shoe("red",10);

// creat constructor function 3

var genericCar = {
	capacity: undefined,
	color: undefined
};

function Car(capacity, color) {
	this.capacity = capacity;
	this.color = color;
}

var sadan = new Car(10, "black");

