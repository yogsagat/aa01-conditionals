/*
Define a function isValidSubStr that takes in two string parameters. The
function should return a string of "VALID" if the second string is part of the
first string regardless of the casing of the characters. Otherwise it should
return "INVALID".
*/

// problem: Create function with 2 parameters, it should return valid if second string is part of first string

function isValidSubStr(str1,str2) {

    let lowerstr1 = str1.toLowerCase();
    let lowerstr2 = str2.toLowerCase();

    if  (lowerstr1.includes (lowerstr2)) {

        return 'VALID';
    } 
    else
        return 'INVALID';

}

console.log(isValidSubStr("JOY", "joy"));                     // => 'VALID'
console.log(isValidSubStr("The cat jumped!", "he cat jump")); // => 'VALID'
console.log(isValidSubStr("Time to program", "time"));        // => 'VALID'
console.log(isValidSubStr("happy", "happiness"));             // => 'INVALID'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isValidSubStr;
