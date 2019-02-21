var userName = prompt("Please enter your name");
console.log('Hi ' + userName + ". Welcome!" );
alert('Hi ' + userName + '. Welcome!');

alert('Lets start the game. Answer few questions with simple Yes or No answers');
alert('I will guess your Sun sign :) ')

var partOfTheYear = prompt("Are you born in first 6 months of the year?");
console.log('partOfTheYear.toLocaleUpperCase' + partOfTheYear + partOfTheYear.toLocaleUpperCase );

if (partOfTheYear.toLocaleUpperCase('en-US') === "YES" || partOfTheYear.toLocaleUpperCase('en-US') === "Y") {
    console.log('Great! You answer is ' + partOfTheYear + '. So you born between January and June.');
    alert("Great! You answer is " + partOfTheYear + ", so you born between January and June.");

    var monthPrefixJ = prompt("Does your birth month Starts with letter J?");

    if (monthPrefixJ.toLocaleUpperCase('en-US') === "YES" || monthPrefixJ.toLocaleUpperCase('en-US') === "Y") {
       console.log('You confirmed, your birth month starts with letter J.');
       var jMonthSuffixY = prompt("Does your birth month ends with letter Y?");
       if (jMonthSuffixY.toLocaleUpperCase('en-US') === "YES" || jMonthSuffixY.toLocaleUpperCase('en-US') === "Y"){
          console.log('You confirmed, your birth month ends with letter Y.');
          var dateRangeJan = prompt("Does your birth date falls between 1 and 19?");
          if (dateRangeJan.toLocaleUpperCase('en-US') === "YES" || dateRangeJan.toLocaleUpperCase('en-US') === "Y"){
             console.log('Your birth date falls between 1 and 19');
             alert('Thanks for your responses ' + userName + '.Your birth month is January and you Sunsign is Capricorn');
          } else {
              console.log('Your birth date falls between 20 and 31');
              alert('Thanks for your responses ' + userName + '. Your birth month is January and you Sunsign is Aquarius');
          }
        } else {
            console.log('You confirmed, your birth month dont end with letter Y.');
            var dateRangeJun = prompt("Does your birth date falls between 1 and 20?");
            if (dateRangeJun.toLocaleUpperCase('en-US') === "YES" || dateRangeJun.toLocaleUpperCase('en-US') === "Y"){
                console.log('Your birth date falls between 1 and 20');
                alert('Thanks for your responses ' + userName + '.Your birth month is June and you Sunsign is Gemini');
            } else {
                console.log('Your birth date falls between 21 and 30');
                alert('Thanks for your responses ' + userName + '. Your birth month is June and you Sunsign is Cancer');
            }
        }    
    } else {
        var monthPrefixM = prompt("Does your birth month Starts with letter M?");

        if (monthPrefixM.toLocaleUpperCase('en-US') === "YES" || monthPrefixM.toLocaleUpperCase('en-US') === "Y") {
           console.log('You confirmed, your birth month starts with letter M.');
           var mMonthSuffixY = prompt("Does your birth month ends with letter Y?");
           if (mMonthSuffixY.toLocaleUpperCase('en-US') === "YES" || mMonthSuffixY.toLocaleUpperCase('en-US') === "Y"){
              console.log('You confirmed, your birth month ends with letter Y.');
              var dateRangeMay = prompt("Does your birth date falls between 1 and 20?");
              if (dateRangeMay.toLocaleUpperCase('en-US') === "YES" || dateRangeMay.toLocaleUpperCase('en-US') === "Y"){
                 console.log('Your birth date falls between 1 and 20');
                 alert('Thanks for your responses ' + userName + '.Your birth month is May and you Sunsign is Taurus');
              } else {
                  console.log('Your birth date falls between 21 and 31');
                  alert('Thanks for your responses ' + userName + '. Your birth month is May and you Sunsign is Gemini');
              }
            } else {
                console.log('You confirmed, your birth month dont end with letter Y.');
                var dateRangeMar = prompt("Does your birth date falls between 1 and 20?");
                if (dateRangeMar.toLocaleUpperCase('en-US') === "YES" || dateRangeMar.toLocaleUpperCase('en-US') === "Y"){
                   console.log('Your birth date falls between 1 and 20');
                   alert('Thanks for your responses ' + userName + '.Your birth month is March and you Sunsign is Pisces');
                } else {
                    console.log('Your birth date falls between 21 and 30');
                    alert('Thanks for your responses ' + userName + '. Your birth month is March and you Sunsign is Aries');
                }
            }    
       } else {
           var monthPrefixF = prompt("Does your birth month Starts with letter F?");

           if (monthPrefixF.toLocaleUpperCase('en-US') === "YES" || monthPrefixF.toLocaleUpperCase('en-US') === "Y") {
              console.log('You confirmed, your birth month starts with letter F.');
         
              var dateRangeFeb = prompt("Does your birth date falls between 1 and 18?");
              if (dateRangeFeb.toLocaleUpperCase('en-US') === "YES" || dateRangeFeb.toLocaleUpperCase('en-US') === "Y"){
                 console.log('Your birth date falls between 1 and 18');
                 alert('Thanks for your responses ' + userName + '.Your birth month is February and you Sunsign is Aquarius');
              } else {
                  console.log('Your birth date falls between 19 and 28 or 29');
                  alert('Thanks for your responses ' + userName + '. Your birth month is February and you Sunsign is Pisces');
              }
            } else {
                console.log('You confirmed, your birth month dont end with letter J or M or F.');
                var dateRangeMar = prompt("Does your birth date falls between 1 and 19?");
                  if (dateRangeMar.toLocaleUpperCase('en-US') === "YES" || dateRangeMar.toLocaleUpperCase('en-US') === "Y"){
                     console.log('Your birth date falls between 1 and 19');
                     alert('Thanks for your responses ' + userName + '.Your birth month is April and you Sunsign is Aries');
                  } else {
                      console.log('Your birth date falls between 20 and 30');
                      alert('Thanks for your responses ' + userName + '. Your birth month is April and you Sunsign is Taurus');
                  }
            }    
        }
    }
} else if (partOfTheYear.toLocaleUpperCase('en-US') === "NO" || partOfTheYear.toLocaleUpperCase('en-US') === "N")  {
    console.log('Great! You answer is ' + partOfTheYear + '. So you born between July and December.');
    alert("Great! You answer is " + partOfTheYear + ", so you born between July and December.");

    var monthPrefixJul = prompt("Does your birth month Starts with letter J?");

    if (monthPrefixJul.toLocaleUpperCase('en-US') === "YES" || monthPrefixJul.toLocaleUpperCase('en-US') === "Y") {
       console.log('You confirmed, your birth month starts with letter J.');
       var dateRangeJul = prompt("Does your birth date falls between 1 and 19?");
       if (dateRangeJul.toLocaleUpperCase('en-US') === "YES" || dateRangeJul.toLocaleUpperCase('en-US') === "Y"){
          console.log('Your birth date falls between 1 and 19');
          alert('Thanks for your responses ' + userName + '.Your birth month is January and you Sunsign is Capricorn');
       } else {
           console.log('Your birth date falls between 20 and 31');
           alert('Thanks for your responses ' + userName + '. Your birth month is January and you Sunsign is Aquarius');
       }
    } else {
        var monthPrefixAug = prompt("Does your birth month Starts with letter A?");

        if (monthPrefixAug.toLocaleUpperCase('en-US') === "YES" || monthPrefixAug.toLocaleUpperCase('en-US') === "Y") {
           console.log('You confirmed, your birth month starts with letter A.');
      
           var dateRangeAug = prompt("Does your birth date falls between 1 and 18?");
           if (dateRangeAug.toLocaleUpperCase('en-US') === "YES" || dateRangeAug.toLocaleUpperCase('en-US') === "Y"){
              console.log('Your birth date falls between 1 and 18');
              alert('Thanks for your responses ' + userName + '.Your birth month is August and you Sunsign is Aquarius');
           } else {
               console.log('Your birth date falls between 19 and 28 or 29');
               alert('Thanks for your responses ' + userName + '. Your birth month is August and you Sunsign is Pisces');
           }
        } else {
            var monthPrefixSep = prompt("Does your birth month Starts with letter A?");

            if (monthPrefixSep.toLocaleUpperCase('en-US') === "YES" || monthPrefixSep.toLocaleUpperCase('en-US') === "Y") {
               console.log('You confirmed, your birth month starts with letter A.');
      
               var dateRangeSep = prompt("Does your birth date falls between 1 and 18?");
               if (dateRangeSep.toLocaleUpperCase('en-US') === "YES" || dateRangeSep.toLocaleUpperCase('en-US') === "Y"){
                  console.log('Your birth date falls between 1 and 18');
                  alert('Thanks for your responses ' + userName + '.Your birth month is August and you Sunsign is Aquarius');
               } else {
                   console.log('Your birth date falls between 19 and 28 or 29');
                   alert('Thanks for your responses ' + userName + '. Your birth month is August and you Sunsign is Pisces');
               }
            } else {
                var monthPrefixSep = prompt("Does your birth month Starts with letter A?");

               if (monthPrefixSep.toLocaleUpperCase('en-US') === "YES" || monthPrefixSep.toLocaleUpperCase('en-US') === "Y") {
               console.log('You confirmed, your birth month starts with letter A.');
      
               var dateRangeSep = prompt("Does your birth date falls between 1 and 18?");
               if (dateRangeSep.toLocaleUpperCase('en-US') === "YES" || dateRangeSep.toLocaleUpperCase('en-US') === "Y"){
                  console.log('Your birth date falls between 1 and 18');
                  alert('Thanks for your responses ' + userName + '.Your birth month is August and you Sunsign is Aquarius');
               } else {
                   console.log('Your birth date falls between 19 and 28 or 29');
                   alert('Thanks for your responses ' + userName + '. Your birth month is August and you Sunsign is Pisces');
               }
            } else {
                var monthPrefixSep = prompt("Does your birth month Starts with letter A?");

            if (monthPrefixSep.toLocaleUpperCase('en-US') === "YES" || monthPrefixSep.toLocaleUpperCase('en-US') === "Y") {
               console.log('You confirmed, your birth month starts with letter A.');
      
               var dateRangeSep = prompt("Does your birth date falls between 1 and 18?");
               if (dateRangeSep.toLocaleUpperCase('en-US') === "YES" || dateRangeSep.toLocaleUpperCase('en-US') === "Y"){
                  console.log('Your birth date falls between 1 and 18');
                  alert('Thanks for your responses ' + userName + '.Your birth month is August and you Sunsign is Aquarius');
               } else {
                   console.log('Your birth date falls between 19 and 28 or 29');
                   alert('Thanks for your responses ' + userName + '. Your birth month is August and you Sunsign is Pisces');
               }
            } else {
                var monthPrefixSep = prompt("Does your birth month Starts with letter A?");

            if (monthPrefixSep.toLocaleUpperCase('en-US') === "YES" || monthPrefixSep.toLocaleUpperCase('en-US') === "Y") {
               console.log('You confirmed, your birth month starts with letter A.');
      
               var dateRangeSep = prompt("Does your birth date falls between 1 and 18?");
               if (dateRangeSep.toLocaleUpperCase('en-US') === "YES" || dateRangeSep.toLocaleUpperCase('en-US') === "Y"){
                  console.log('Your birth date falls between 1 and 18');
                  alert('Thanks for your responses ' + userName + '.Your birth month is August and you Sunsign is Aquarius');
               } else {
                   console.log('Your birth date falls between 19 and 28 or 29');
                   alert('Thanks for your responses ' + userName + '. Your birth month is August and you Sunsign is Pisces');
               }
            }
        } 
    }
} else {
    console.log('Sorry, you entered answer as ' + partOfTheYear + '. It is not valid input.');
    alert("Sorry, you need to answer only Yes or No. " + partOfTheYear + "is not a valid response.");
    alert("Bye. Have a nice day!");
}