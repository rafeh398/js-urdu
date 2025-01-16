const score=400

const balance= new Number (100)
console.log(balance);  //same method will also appear in console like strings


// ***methods

console.log(balance.toString());  // after making it string we cann add properties of string
console.log(balance.toFixed(2)); // shows upto 2 decimal output is 100.00

const otherNumber=123.897
console.log(otherNumber.toPrecision(3)); // precise and round off

const bigNumber=100000
console.log(bigNumber.toLocaleString("en-pk")); // shows balance currency in your local currency



//**************MATHS************ */

console.log(Math);
console.log(Math.abs(-4)); //make positive
console.log(Math.round(4.3)); //round off
console.log(Math.sqrt(9)); // sq root
console.log(Math.max(3,5,7)); //max and same like there is math.min
console.log((Math.random()*10)+1); //random gives values between 0 and 1
//  +1 hmne lgaya k ager value 0.0125 aisy a jaye tb b isko overcome kiya jaye

const min=1
const max=6
console.log(Math.floor((Math.random()*10)+1 +min)); // +min se ye huga k minimum 1 se to oper ee value ayegi 













