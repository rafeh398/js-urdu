//   Array.reduce() method iterates over an array, 
// applying a reducer function to each element, accumulating a single output value.

const myNum=[1,2,3]
//0+1+2+3

const myNum2=myNum.reduce(function(accumaltor,currentvalue){  

return accumaltor+currentvalue
}
,0   //initial value is 0  //it go to accumalator first time
)
console.log(myNum2);

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  //same in arrow function


//********** exercise for reduce*/


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0) //acc mein add kiya item ki price 
// or
//  initial is zero

console.log(priceToPay);