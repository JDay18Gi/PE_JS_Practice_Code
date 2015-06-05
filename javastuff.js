var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function(input, queue){
  for(var i = queue.lenght; i >=0;){
    var func = queue.shift();
    input = func(input);
    if(i === 0){
      return input;
    }
}
};

alert(applyAndEmpty(4, puzzlers));






var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

var start = 2;
var input = start;
var queue = puzzlers;

console.log(queue.lenght);

for(var i = queue.length; i >=0; i--){
    var func = queue.shift();
    input = func(input);
    if(i == 2){
      console.log((input));
    }
};



Next Question:::::::::::::


var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

console.log(puzzlers[3](9))





//Next Question {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}



function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}


var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);


console.log(hidden);
console.log(jumble);
console.log(result);