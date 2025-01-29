// promise : operation jo hm chaty bd mein aye queue mein or complete hu
// promise: eventually completion(or failure) of event
// example : file ka access direct ni hoti programming se ..kernal se request krni prti ha k file le k ayu
// states: 3
//states: pending , fulfilled, rejected

// ****************

const promiseOne = new Promise(function (resolve, reject) {
    //do an async task like DB calls, crypto, network 
    setTimeout(() => {
        console.log("async task complete");
        resolve()
    }, 2000);

}
)
promiseOne.then(function () {
    console.log("promise consumed");

})    //resolve ka taluq ha then k sath


//*************** */


const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@gmail.com" })
    }, 2000);
})

promiseTwo.then(function (user) {
    console.log(user);

})  // ap resolve k ander jo b object dete wo data apko show hu jata then k func k parameter mein

//********************** */

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false // isko true kr k b check kr lena
        if (!error) { //ager error nahi ha
            resolve({ username: "rafeh", pass: "123" })  //resolve mein object diya
        } else {  //ager error ha
            reject("ERROR . sorry something went wrong")  //ager reject hu kia show hu
        }

    },2000)
})  //promise created


promiseThree
    .then(function (user) {
        console.log(user);       //ik then mein user print huga mtlb pura object
        return user.username   // is mein just username return kiya
    })
    .then(function(username){
console.log(username);             //is (chaining then) mein pichly username ko print kiya

    })
    .catch(function(error){
        console.log(error);          //catch ka taluq hota reject se
        
    })
    .finally(function(){
        console.log("promise is either resolved or rejected");   //ye final pe chlta 
        // btata k akhir hua kia ha last pe
        
    })

  
//  **********************


// fetch()


//**************** */

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
return response.json()
})
.then(function(data){
console.log(data);

})
.catch(function(error){
    console.log(error);
    
})  // ye wala data pele display hua pele kam hua..
// or bad mein uper wale kam hua  // reason : micro task queue or high priority queue



//fetch mein ap objects like headers bej skty kafi cheeze bej skty
// fetch mein 2 cheeze hoti , 1 data 2 web browser network request
//data= fulfilled or rejected ....this data is not directly accessible
// web browser=network ....tick or cross





