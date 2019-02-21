var userName = prompt("Please enter your name");
console.log('Hi ' + userName + ". Welcome!" );
alert('Hi ' + userName + '. Welcome!');

alert('Lets start the game. Answer few questions with simple Yes or No answers');
alert('I will guess your Sun sign :) ')

var partOfTheYear = prompt("Are you born in first 6 months of the year ?");
if (partOfTheYear.toLocaleUpperCase === "YES" || partOfTheYear.toLocaleUpperCase === "Y")
{
console.log('Great! You answered' + partOfTheYear + '. So you born between January and June.');
alert("Great! You answered" + partOfTheYear + " So you born between January and June.");
} else {
    console.log('Great! You answered' + partOfTheYear + " So you born between July and December.");
    alert("Great! You answered" + partOfTheYear + " So you born between July and December.");

}
var monthFirstLetter = prompt("Is first letter of your birth month starts with  ?");

if (monthFirstLetter.toLocaleUpperCase === "YES" || monthFirstLetter.toLocaleUpperCase === "Y")
{
}







