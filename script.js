//when window opens, window will ask user to choose rock, paper, scissors ** use array and initials R, P, S no matter what user chooses, make sure it is in upper case store in variable
//have comp pick at random R,P,S store in variable array  show what computer uses
// tie happens if computer and user make same chouce
//user wins if 
// user R, comp S
// user S, comp P
// user P, comp R
// else..
//computer wins
// have variables for total wins, total loses. increment variable by 1 and each condition appropriatly show those results to user
//ask to play again, if play again start from beginning, otherwise end game and show the HTML

var wins = 0
var ties = 0
var loses = 0

var options = ["R", "P", "S"]

var userChoice = window.prompt("Choose one: R, P or S");
console.log(userChoice)

if (!userChoice) {
    alert("you need to type something in");
    playGame();
}

userChouce = userChoice.toUpperCase();

var index = Math.floor((Math.random()* options.length));
var computerChoice = options[index];
