// Final Closed Values I


var sharkList = ["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."];

function assignLaser(shark, sharkList) {
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
}

// Final Closed Values I - 1

var friendList = ["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."];

function assignHat (friend, friendList) {
  for(var i = 0; i < friendList.length; i++) {
    if (friend == friendList[i]) {
      alert("Take hat #"+(i+1)+" immediately!");
    }
  }
}

// Final Closed Values I - 1.1

var friendList = ["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."];

function assignHat (friend, friendList) {
  for(var i = 0; i < friendList.length; i++) {
    if ( friendList[i] == friend ) {
      alert("Take hat #"+(i+1)+" immediately!");
    }
  }
}

// Final Closed Values I - 2

var friendList = ["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."];

function assignTool (worker, workerList) {
  return function () {
    for(var i = 0; i < friendList.length; i++) {
      if(worker == workerList[i]) {
        return alert("Take hat #"+(i+1)+" immediately!")
      };
    }
  };
}

// Final Closed Values I - 3

var friendList = ["Sea Pain", "Great Wheezy", "DJ Chewie",
 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 "Ice Teeth", "The Notorious J.A.W."];

function assignTools(workerList) {
  var count = 0
  return function(worker) {
    for (var i = 0; i <= workerList.length; i++){
      if(worker == workerList[i]){
        count++;
        return alert("Take tool #"+(i+1)+" and go to your station.\n"+count+" tools have been taken so far.");
      } 
      else if(i == workerList.length){
        return alert("You are not a member. Get lost, Fool!");
      }
    }
  };

}

var toDo = assignTools(friendList);




// Final Closed Values II:

var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];



function makeTargetAssigner(sharks, targets) {
  return function(shark) {
    for(var i = 0; i < sharks.length; i++){
      if(sharks[i] == shark){
       return alert("What up, " + shark + "!\n" + 
             "There've been " + targets[i] +
             " sightings in our 'hood!\n" +
             "Time for a swim-by lasering, homie!");
     }
    }
};
}



var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");


function SumOfSquares (a, b){
  var x = add(a*a, b*b);
  return x;

  function add(c, d){
    var a = c + d;
    return a;
  }
}

