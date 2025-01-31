console.log(Math.PI); //3.1415 something

Math.PI=5
console.log(Math.PI);  // cant be 5

 const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
 console.log(descriptor);  // 3.14 //writable is false so value cant be changed

 //*********** */

 const chai={
    name: "ginger",
    price:250,
    isAvailable:true,

 }
 console.log(Object.getOwnPropertyDescriptor(chai, "name")); //this is writeable now

 Object.defineProperty(chai ,"name",{writable : false, enumerable:false}  ) // 3 parameters

 console.log(Object.getOwnPropertyDescriptor(chai, "name")); // now writeable is false




 
 


