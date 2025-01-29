const user= {
    username: "rafeh",
    loginCount: 8,        //these are properties
    signedIn: true,

    getUserDetails : function(){ 
        // console.log("got user details");         //function in object
        // console.log(`username: ${this.username}`);

        console.log(this);
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());



//************constructor function */
//  const promiseOne= new Promise()
// const date=new Date()  //new jo ha na wo constructor function hota ha
//ye har bar new instance deta ha


//********** */

function userfunc(username,Logedin,loginCount){
    this.username=username;
    this.Logedin=Logedin;  //left wala this.Loged in jo ha wo variable ha right wala parameter ha
    this.loginCount=loginCount;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);  //is mein ap method lgaya

    }

    return this
}

const userOne= userfunc("rafeh",true,1)
const usertwo= userfunc("aatif",false,2)

console.log(userOne);  //usertwo wali value show hui ku k override hugi value isliye new ka use kro ku
// k new jo ha new context field deta ha

const userthree=new userfunc("rafeh",true,3)
const userfour= new userfunc("rafeh",true,4)

console.log(userthree);
console.log(userfour);  //new lgany se alag alag values show hui





