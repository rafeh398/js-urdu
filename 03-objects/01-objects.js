// singleton  = ager construction se bnega to singleton bnega   object.create() = construction method
// OR literals se bny to singleton ni hota

//objects literals

const jsUser={
    name:"rafeh",
    age : 23,
    location: "jhelum",
    email: "rafeh398@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"]

}  //this is object u can give array too in objects and main thing is u give keys and values in objects

// ************To access objects******

console.log(jsUser["email"]); // u can also access by dot but its not good,,sq bracket is good

// *******take symbol and define it in object

const mySym= Symbol("key1")

const myobject={
name: "aatif",
[mySym]: "key2"
}

console.log(myobject[mySym]);  //output is key2 but its type is symbol this is correct syntax

//other operations

// jsUser.email="changeemail@gmail.com" /// it will change value
//  Object.freeze(jsUser) // freeze object u cant change anything now

 jsUser.greeting=function () {
    console.log("hello js user");
    
 }
 console.log(jsUser.greeting());
 
 jsUser.greeting2=function () {
 console.log(`hello js user, ${this.name}`);  // we use this when object is same. in this case (jsUser)
    
 }
 console.log(jsUser.greeting2());
 



