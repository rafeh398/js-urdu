// Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //date is object

let myCreatedDate=new Date(2023,0,23)  //month starts from 0 in this format
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDatesecond = new Date('2022-01-14');    //month starts from 1 in this yy mm format
console.log(myCreatedDatesecond.toLocaleString()); // 1/14/2022 is output

// ***Timestamp

let myTimeStamp=Date.now()
console.log(myTimeStamp);  // now time in miliseconds
console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));  // time in seconds and full figure

let newDate=new Date()
console.log(newDate.getMonth()); //output is 0 for january





