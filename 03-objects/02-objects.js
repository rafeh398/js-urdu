//  const tinderUser=new Object()  // singleton 

//  console.log(tinderUser);

//  //now push value to singleton object
 
//  tinderUser.name= "rafeh"
//  tinderUser.id="sammy123"
//  tinderUser.isLoggedIn= false

//  console.log(tinderUser);


//***************** */


//  const regularUser={
//     email:"rafeh398@gmail.com",
//     fullname:{                   // u can use nesting objects too
//         userFullName:{
//             firstName:"rafeh ul",
//             lastName:"hassan"
//         }
//     } 
//  }
//  console.log(regularUser);
 
//  console.log(regularUser.fullname);
 

 //***********methods */
//****to join objects */
const obj1={ 1: "a",
    2 : "b"
}
const obj2={ 3: "c",
    4 : "d"
}
 const obj3= Object.assign({},obj1,obj2)  //empty braces is target and next ones are source
 console.log(obj3);     //obj1 and obj2 combined in obj3   ASSIGN is use to combine objects


 //****spread method is much better */

 const obj4={...obj1, ...obj2}
 console.log(obj4);         //output is same

 // database se jb apke pas data ata ha to array ka object ata ha
 //  mtlb ik array mein kafi obects hugy

 console.log(Object.keys(obj4)); //output is array of keys then u can use loops
 console.log(Object.values(obj4)); //gives array of values
 console.log(Object.entries(obj4));  //give pair of keys and values
 console.log(obj4.hasOwnProperty('3')); //check whether (3)KEY  is included in obj4 or not

 
 

 // De-Structure

 const course={
    coursename: "js hindi",
    price:"999",
    courseInstructor: "hitesh"
 }
 const {courseInstructor:instructor}=course
 console.log(instructor);  //we took course instructor and destructure it into instructor 
 // Output is Hitesh
 

 // API INTRODUCTION

 // jab ap apna kam dusro k ser pe dal dete hain usi ko api kete hain
 // json formatter is a tool to understand api