let score="33"

console.log(typeof score);

let valueInNumber= Number(score)
console.log(typeof valueInNumber);

// when string like 33abc is converted to number then its is converted but the problem is when u check its value then it will not a number (NaN)
// when undefined is converted to number then its is converted but the problem is when u check its value then it will not a number (NaN)
// when null is converted to number then its is converted but the problem is when u check its value then it will be 0(zero)
// when boolean true and false is converted to number then its value will be 1 and 0 respectively.
 

let isLoggedIn=1
let booleanValue=Boolean(isLoggedIn)
console.log(booleanValue);  


// 1 number is converted to ture
// 0 number is converted to false
// "rafeh" number is converted to ture
// "" number is converted to false

let someNumber=33
let stringNumber= String(someNumber)
console.log(typeof stringNumber);

// number is converted to string


// ********OPERATIONS**********

let value=3
let negValue=-value
console.log(negValue);

// + console.log(2+2)
//-
// *
// 4/2=2 divide
// 2**3  2 raise to the power 3
// 4%2 remainder

//  strind addition
  
let str1="hello"
let str2= " rafeh"
let str3=str1 + str2
console.log(str3);  // answer is simply HELLO RAFEH

console.log("1"+2);
console.log(1+"2");    // both answers are 12



console.log("1"+2+2);   // answer is 122
console.log(1+2 +"2");  //answer is 32        // in both cases JS will take 1st number or string priority

let gameCounter=100
gameCounter++;
console.log(gameCounter);   //answer is 101

// ************MDN doc************* increment prefix and postpix
 /* let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" */


//*********comparisons*******
//  console.log(2>1);
//  (2<1);
//  (2<1);
//  (2>=1);
//  (2==1);
//  (2!=1); 



// ******** comaparions of different types
// console.log(null> 0)  // unpredictable result  //AVoid these type of comparisons
// === triple equal strictly checks the values 
   











