

//scopes are curly braces when it comes with if else or function {}
let a=300  //value of a is 300 in global scope
if(true){
    let a=10  //value of a is 10 in local scope of IF
const b=20
var c=30 
}
// console.log(a);  a is not defined in output
// console.log(b);   b is not defined in output
console.log(c);   //output is 30 because var is applicable out of scope


//**************scope level and hoisting */

// Ager nesting functions(if else b hu skta) hu to parent wale child k variable ko access ni kr skty lekin
// child wale parents ko access kr skty hain//like a ice cream

//ager variable ko declare kr k ander function rkho to isko Expression krty hain
// for example const a=function // ap is method se ager function bnaty hain to iski declaration se pele isko access ni kr skty
//normal function ko ap uski declaraion se pele ee access kr skty hain
// //isi concept ko kete hain hoisting