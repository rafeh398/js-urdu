const marvelHeros=['ironman',"thor",'spiderman']
const dcHeros=["superman", "batman","flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);   // output is array inside array that will be treated as last index
// this type of marging is not good

// const newArr= marvelHeros.concat(dcHeros)   //concat give new array combining two arrays but do not modify existing array
// console.log(newArr);  //we make new variable to keep joined array


//******spread is very good */
// const allNewHeros= [...marvelHeros,...dcHeros]
// console.log(allNewHeros);


const anotherArray=[1,2,[3,4],5,6,[7,8,[9,10]]] //array in other array
const realArray=anotherArray.flat(Infinity)   //flat will make it in single array
console.log(realArray);  

//from = convert to array
console.log(Array.from("rafeh"));
console.log(Array.from({name:"rafeh"})); // give empty because keys or values should be defined in from

//converting variables to array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

//is array method is used to check its array or not


