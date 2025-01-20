// control structure enable you to control the flow of execution in a program. 

//if else
‎03_basics/04_iife.js
+12
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,12 @@
// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
‎04_control_flow/one.js
+52
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,52 @@
// if
const isUserloggedIn = true
const temperature = 41
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==
// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}