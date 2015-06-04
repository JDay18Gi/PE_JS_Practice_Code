var compare = function(choice1, choice2){
    if(choice1 === choice2) {
        return "The result is a tie!";
    } 
    else if(choice1 === "rock") {
        if (choice2 === "scissors"){
            return "Rock wins!"
        } else {
            return "Paper wins!"
    }} 
    if (choice1 === "scissors"){
         if (choice2 === "rock"){
            return "Rock wins!"
        } else {
            return "Scissors wins!"
    }}
    else{ //paper
        if (choice2 === "rock"){
            return "Paper wins!"
        } else {
            return "Scissors wins!"
    }}
};



/*jshint multistr:true */

var text = "This is a sentence.\
I hope you like it. KJMy name is\
Jason. What is your name? I don't\
likJe your name. Because it is not\
my name. My name is Jason. Yes, that\
is righJt. It is Jason."



var findJason = function(text, name){
    var hits = [];
    for(var i=0; i<text.length; i++){
        if(text[i] == name[0]){
            hits.push(text.substring(i, (i + name.length)));
        }
    }
    return hits;
};

var hits = findJason(text, "Jason");
var name = "Jason"

console.log(hits);
    for(var a = 0; a < hits.length; a++){
        if(hits[a] != "Jason"){
            hits.splice(a, a);
        }
    }
console.log(hits);



findName(text, "Jason");

/// isNaN not working
