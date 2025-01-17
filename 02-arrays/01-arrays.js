// arrays are collection of different items in single variable
//arrays in JS are resizeable
//arrays make shallow copies

//shallow copy= jo change kro original mein b change huga ku k iska reference same hota ha
//deep copy= Not same reference

const myArray=[0,1,2,3,4]
// console.log(myArray[2]);  // accessing arrays by indexes

// const myArray2=new Array(1,2,3,4)  //2nd way to declare array

// const myHeros= ["superman",'ironman']  //strings stored in array

// //***********array methods */

// myArray.push(6)
// console.log(myArray);  //add a new value at last

// myArray.pop()  //removes last value

// myArray.unshift(9)
// console.log(myArray);  // add 9 at start
// // shift method remove 1st value

// console.log(myArray.includes(9)); //shows true when 9 is available in array

// console.log(myArray.indexOf(3));  //shows position of 3

// console.log(myArray.join());   // join will change the type of array to string

//slice,splice

console.log('a',myArray);
const myn1=myArray.slice(1,3)
console.log(myn1);
console.log('b', myArray);


const myn2=myArray.splice(1,3)
console.log('c', myArray);
console.log(myn2);
  // slice():
// The slice() method in JavaScript extracts a section of an array and
//  returns a new array containing the selected elements, without modifying the original array.but
// (1,3) means index 1 , index 2 and index 3 is not included

//splice  used to add and remove item modifying the array
//(1,3)means start from index 1 and removes 3 items , index 1 2 and 3


















