var userName = prompt("Please enter your name");
console.log('Hi ' + userName + ". Welcome!" );
alert('Hi ' + userName + '. Welcome!');

alert('Lets start the game. Answer few questions with simple Yes or No answers');
alert('I will guess your Sun sign :) ')

var partOfTheYear = prompt("Are you born in first 6 months of the year?");
if (partOfTheYear.toLocaleUpperCase === "YES" || partOfTheYear.toLocaleUpperCase === "Y"){
    console.log('Great! You answered' + partOfTheYear + '. So you born between January and June.');
    alert("Great! You answer is " + partOfTheYear + ", so you born between January and June.");

    var monthPrefixJ = prompt("Does your birth month Starts with letter J?");

    if (monthPrefixJ.toLocaleUpperCase === "YES" || monthPrefixJ.toLocaleUpperCase === "Y") {
    console.log('You confirmed, your birth month starts with letter J.');
    var monthSuffixY = prompt("Does your birth month ends with letter Y?");
    if (monthSuffixY.toLocaleUpperCase === "YES" || monthSuffixY.toLocaleUpperCase === "Y"){
        console.log('You confirmed, your birth month ends with letter Y.');
        var dateRangeJan = prompt("Does your birth date falls between 1 and 19?");
        if (monthSuffixY.toLocaleUpperCase === "YES" || monthSuffixY.toLocaleUpperCase === "Y"){
            Console.log('Your birth date falls between 1 and 19')
            alert('Thanks for your responses ' + userName + '.Your birth month is January and you Sunsign is Aquarius')
        } else {
            Console.log('Your birth date falls between 20 and 31')
            alert('Thanks for your responses ' + userName + '. You are a Aquarius')
        }
    }
   
    }





} else {
    console.log('Great! You answered' + partOfTheYear + " So you born between July and December.");
    alert("Great! You answered" + partOfTheYear + " So you born between July and December.");

}
var monthFirstLetter = prompt("Is first letter of your birth month starts with  ?");

if (monthFirstLetter.toLocaleUpperCase === "YES" || monthFirstLetter.toLocaleUpperCase === "Y")
{
}







