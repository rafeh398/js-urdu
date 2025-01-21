//for

// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element);   // output is o to 9

//     // whwn console log is executed program returns to i++ and check value if it is less than 10 
//     // and then program is again executed
// }

// **************nested loop


// for (let i = 0; i <= 10; i++) {


//     for (let j = 0; j <= 10; j++) {

//         console.log(`inner loop value : ${j} and inner loop : ${i}`); 
//         // u can call i in child {icecream method} line 19
//     }

// } 

//*******print table 1 to 5 */

// for (let i = 1; i <= 5; i++) {
   

//     for (let j = 1; j <= 10; j++) {
// console.log(`${i}*${j} = ${i*j} `);

//     }

// } 

//*********only table of 5

// for (let i = 5; i <= 5; i++) {
   

//     for (let j = 1; j <= 10; j++) {
// console.log(`${i}*${j} = ${i*j} `);

//     }

// } 

//**********array */
let myArray=["flash","superman","batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//**********break  */
//ager database se 1000 books aye to ap ko kuch ee chaiye to ap loop khtm kr skty

for (let index = 1; index <=20; index++) {
    const element = index;
    if (index==5) {
        console.log("5 detected");
        break
        
        
    }
    console.log(element);
} //output should be 1 to 20 but after 5 loops is broken due to Break

//**********continue */
for (let index = 1; index <=20; index++) {
    const element = index;
    if (index==5) {
        console.log("5 detected");
      continue
        
        
    }
    console.log(element);
} // on 5 condition is applied and then loop is continued to next u will remain in loop