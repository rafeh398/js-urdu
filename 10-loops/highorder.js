// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {           // there can be string in place of arr
    console.log(num);
}

//map       //unique value and same order

const map= new Map()
map.set("pak","pakistan")
map.set("usa","america")
// console.log(map);


 //************ */
for (const [key,value] of map) {
    console.log(key , ":",value);
    
}  // this structure does not work on objects
