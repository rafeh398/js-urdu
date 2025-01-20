// function simply aik package a code ka
// aik ee kam ko ager 5 br krwana hu to ik function bnao to 5 br use kr lo

function myName(){
    console.log("r");
    console.log("a");
    console.log("f");
    console.log("e");
    console.log("h");

}
   

myName() // this line's output is all the console logs

function addTwoNumbers(number1,number2){  // number1 and number2 are parameters
return number1+number2
 //return k bad console ni lgaye ge ku k return k bd kuch b operate ni hota
  }

const output=addTwoNumbers(3,7)
    console.log("output is",output);
    

 // output is 10 //3 ,7 are arguments

/****************** */

function userLoginMsg (username){
    return `${username} just logged in`
}

console.log(userLoginMsg("rafeh"));  //output is rafeh just logged in

// bu if we dont pass anything to line 33 in console then undefined will appear

// to overcome this

function userLoginMsg2(username){
    if(username===undefined){
        console.log("please enter username");
        return
    }
     return `${username} just logged in`
}
console.log(userLoginMsg2());    //output is please enter username because nothing is passed in console


// there is a 2nd option u can give default value if nothing is passed in console
//  in that case SAM is always shown in username

function userLoginMsg3(username="SAM"){
    if(username===undefined){
        console.log("please enter username");
        return
    }
     return `${username} just logged in`
}
console.log(userLoginMsg3()); //output is SAM just logged in