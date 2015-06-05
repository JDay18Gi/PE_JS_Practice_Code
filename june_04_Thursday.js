
//manipulating exercise from codeSchool

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

function relieveDuty(vehicle, day) {
  var offDuty = [];
  var onDuty = [];
  for (var i = 1; i <= vehicle.numRangers; i++) {
    if (vehicle["ranger"+i].dayOff == day) {
      offDuty.push(vehicle["ranger"+i]);
    } else {
      onDuty.push(vehicle["ranger"+i]);
    }
    delete vehicle["ranger"+i];
  }
  vehicle.numRangers -= offDuty.length;
  for (var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger"+j] = onDuty.shift();
  }
  return offDuty;
}

relieveDuty(vehicle3, "Friday");

// Object problem from CodeSchool:


var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

var location = lighthouseRock;

console.log(superBlinders[lighthouseRock["ranger1"].station][0]);
console.log(superBlinders[lighthouseRock["ranger"+1].station][0]);


// Object problem from CodeSchool:

Object.prototype.noCalvesYet = function() {
  if((this.type == "cow") && (this.hadCalf == null)) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function () {
  var numToBreed = 0;
  for (var i in this) {
    if (this[i].noCalvesYet()) {
    numToBreed++;
    }
  }
  return numToBreed;
};

// class project from CodeSchool:

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

// create post1 and post2
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

// modify the post properties
post1.x = -2;
post1.y = 4;
post1.postNum = 1;

post2.x = 5;
post2.y = 1;
post2.postNum = 2;

post1.sendRopeTo(post2);
post2.sendRopeTo(post1);

// connect the posts together



