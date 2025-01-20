// iife=immediately invoked function expression
//jo function jaldi execute hu jaye like data base file open krne k sath ee connect hu jaye
// reason= global scope k variables ki jo declaration hui ha uske pollution ko save krne k liye
//syntax= ()()


(function chai(){
    console.log("DB CONNECTED")
})();  // code end krne k liye semi colon for 2 iife likhne k liye
( (name)=> {
    console.log(`DB CONNECTED 2 ${name}`)
})("rafeh")


//uper wala named issue ha
// nichy wala unnamed issue ha
