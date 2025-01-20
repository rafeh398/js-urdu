//THIS
// this refers the current context

const user={
     username:"rafeh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        
    }

}
    user.welcomeMessage()   

   console.log(this) //output is {}, ager ap global mein this lgao to empty object ayega
   //lekin ager browser k console mein lgao to window object ayega

   //isi tra just this ko ager ap likhy function k ander to ye undefined ayega

   //***********Arrow */  ()=> ()

//    const addTwo= (num1,num2) => {
//     return num1+num2
//    }
// console.log(addTwo(1,3));  //output is 4 (explicit function)

const addTwo= (num1,num2) =>  (num1+num2)
console.log(addTwo(1,3));  //output is 4 (implilicit function)
// jb curly braces lgao to return likho jab paranthesis lgao to return likhne ki zrorat nai



   

