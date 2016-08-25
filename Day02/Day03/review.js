/*
Jerry Wood
08/15/2016
Intro to Java Script
*/

var promptText = "What would you like to do?";
var input = prompt(promptText);
while(input == ""){
  input = prompt("Your answer was not correct\n"+promptText);
}
alert(input);
