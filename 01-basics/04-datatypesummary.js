 // there are 2 types of datatypes
 //  primitive data types = we call them by value
 // 7 types : string , number, boolean , null , undefined, symbol , BigInt

 // non-primitive OR reference types = we call them by reference
 // Arrays , Objects , Functions

 // ***********************//

 /* javaScript is a dynamically typed language. This means that variable types are determined at runtime,
   and you do not need to explicitly declare the type of a variable before using it. 
 You can assign different types of values to a variable during its lifetime.*/

 const heros=["superman","ironman"] ; //arrays   //its datatype is object

 let myObj ={name: "rafeh",
    age:23,
 } // objects     // its datatype is also object

 const myFunction= function () {
    console.log("hello world");
    
 } // functions

 console.log(typeof myFunction);  //its datatype is function
 

// ******************** stack and heap memory************************

// stack (primitive) ,,  heap (non-primitive)
//stack k ander  jab ap koi cheez lete hain to apko copy milti ha 
// but HEAP k ander koi cheez rkho to reference milta ha

// start with making string variable which goes to stack

let myName="rafeh"
let anotherName= myName
anotherName="aatif"

console.log(myName)

console.log(anotherName)   // output is rafeh and aatif (alag alag value)


// // start with making object which goes to Heap

let user1={
   email: "user1@gmail.com",
   age: 20
}

let user2 = user1

user2.email="user2@gmail.com"

console.log(user1.email);
console.log(user2.email); // output mein dono ki value same ayegi 2nd wali (user2@gmail.com)

