class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{       //teacher is child and user is parent
    constructor(username, email, password){
        super(username)   //no need to use this for username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")  //use new keyword

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe() // addCourse ni add hu skta idr ku k ye child se ni le skta

console.log(chai instanceof User);  // chai = teacher ka tha to ye instance ha user ka//otput is true