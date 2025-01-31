class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
 
const iphone = new Teacher("iphone", "i@phone.com")  //iphone is instance
console.log(iphone.createId());  //error..

//  static ....You cannot access static methods from instances (like iphone.createId()),
//  but you can access them from the class (like User.createId() or Teacher.createId()

console.log(Teacher.createId());