const name="rafeh"
const age=23

console.log (`my name is ${name} and i am ${age} years old.`);  
// this method is called string interpolation 
// for string concatenation

const gameName=new String("pubg-rf")  
// this is same as name and age is declared but in this u will found many methods in console

console.log(gameName[0]);  //to access key value pair we give 0 key which value is p
console.log(gameName.length);  // to access length
console.log(gameName.toUpperCase()) // it will convert to upper case
console.log(gameName.charAt('2'))  // to find position at 2
console.log(gameName.charAt('2'))  // to find position at 2
console.log(gameName.indexOf('u'))  // to find position of u

const newString= gameName.slice(0,4)  
console.log(newString);         // output is pubg 
// u can pass negative value also in slice method 
// but cant pass negative value in SUBSTRING method

const findTrim= "   rafeh  "
console.log(findTrim);
console.log(findTrim.trim());    // to remove spaces in output

const url="https://rafeh.com/rafeh%20mughal.com"
console.log(url.replace('%20','-'));  //to replace %20 with (-)

console.log(url.includes('rafeh')); // find this value is included in string or not.. the result is true

console.log(gameName.split("b"));  // split it from b output will be an array ["pu", "g-rf"]





