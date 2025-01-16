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
 


