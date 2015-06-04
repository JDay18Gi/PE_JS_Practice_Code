//Highway to the Danger Zones

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(toString(location));
    list += (location +" ");
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\nCurrent danger zones are:\n" +
     			zones);
    console.log(zones);
  };
}

var fuzzyBearWarning = warningMaker("Fuzzy Bear");  


// Attempt 2


function warningMaker(obstacle) {
  var count = 0;
  var list = "";
  var zones = [];
  return function(number, location) {
    count++;
    zones.unshift(location);
    list += (zones[0]+"\n");
    
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\nCurrent danger zones are:\n" +
          list);
  };
}

var fuzzyBearWarning = warningMaker("Fuzzy Bear");

/// Testing concepts

var list1 = "";
var zones1 = [];
var locationVar = "Pizza Hut";
var locationVar2 = "WalMart";
zones1.unshift(locationVar);
list1 += (zones1[0]+"\n");
console.log(list1);
zones1.unshift(locationVar2);
//
// addd to list
list1 += (zones1[0]+"\n");
alert(list1);

//Highway to the Danger Zones - 1

function listofTrains(trainMuseum) {
  var trainCount = 0;
  var trainList = "";
  return function(train) {
    trainCount++;
    trainList += (" "+train + ",");
    var trainList1 = trainList.slice(0,-1);
    console.log("At the "+trainMuseum+", we have seen "+trainCount+" trains including the following:"+trainList1+".");
  };
}

var BOtrains = listofTrains("B&O Railroad Museum");

//Highway to the Danger Zones - 2

function loveLetter(girl, author) {
  var letterNumber = 0;
  return function(hairLength, eyeColor, mouthShape){
    letterNumber++
    alert("Dear beautiful "+girl+",\n this is now the "+letterNumber+" letter I have written to you.\n I just wanted to tell you one more time how much I love your "+hairLength+" hair, your "+eyeColor+" eyes, and your "+mouthShape+ " mouth. \n Please write me back,\n"+author);
  };
}

var joeToJane = loveLetter("Jane", "Joe");

//Highway to the Danger Zones - 3

pageNumber = 0;
studentList = "";
studentArr = [];

function pageHeader(student){  
  return function(course, professor){
    pageNumber++;
    studentArr.unshift(student);
    studentList += ("\n"+studentArr[0]);
    alert(professor+": "+course+studentList);
    };
}

var Fun1 = pageHeader();

// test code

var myArray = [];
myArray.push(["location1", 3]);
console.log(myArray);
myArray.push(["location2", 10]);
console.log(myArray);

console.log(myArray[-1]);


/// Just Keep Track of it ALL!

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

var christamsFire = warningMaker("Flaming Christmastrees");

/// Just Keep Track of it ALL! - 1

function websitesToAvoid(websiteType) {
  var count = 0;
  var sites = [];
  return function(siteURL, rating) {
    var list = "";
    count++
    sites.push([siteURL, rating]);
    for (var i = 0; i < sites.length; i++) {
      list+= siteURL+": "+rating+"\n";}
      alert("You need to avoid these "+websiteType+" sites:\n"+list);
    };
}

var distracting = websitesToAvoid("distracting");


/// Just Keep Track of it ALL! - 2

function websitesToAvoid(websiteType) {
  var count = 0;
  var sites = [];
  return function(siteURL, rating) {
    var list = "";
    count++
    sites.push([siteURL, rating]);
    for (var i = 0; i < sites.length; i++) {
      list+= siteURL+": "+rating+"\n";}
      alert("You need to avoid these "+websiteType+" sites:\n"+list);
    };
}

var distracting = websitesToAvoid("distracting");


