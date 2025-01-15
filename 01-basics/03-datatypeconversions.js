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