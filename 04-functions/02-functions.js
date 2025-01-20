//parameters in which arguments are not known like ADD to Cart

function calculateCartPrice(num1){
return num1

}
console.log(calculateCartPrice(2)); //output is 2

//if arguments are not known then: 

function calculateCartPrice2(...num1){   // three dots are called rest operator
    return num1
    
    }
    console.log(calculateCartPrice2(200,300,500));  //output is array (accomodate many values)
    //  by using rest operator


    //********* */

function calculateCartPrice2(val1,val2,...num1){  
    return num1
    
    }
    console.log(calculateCartPrice2(200,300,500,2000,4000)); //output is [500,2000,4000]
    // beacuse 200 and 300 go to val1 and val2 respectively and the rest values go to num1 and
    //  we call return num1 so these are shown in output

    //********** pass objects(like variables in above example) in functions */

  const user={
       username: "rafeh",
       price: "999"
    } //make a object first


    function namePrice(anyobject) {
    
   console.log(`username is ${anyobject.username} and price is"${anyobject.price}`);
        
    }

   namePrice(user)  // call your object in place of( anyobject parameter)

   