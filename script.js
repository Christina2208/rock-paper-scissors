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

var userChoice = window.prompt("Choose one: Rock, Paper or Scissors");
alert("Choose One");
console.log(userChoice)



let x = Math.floor((Math.random() * 10));