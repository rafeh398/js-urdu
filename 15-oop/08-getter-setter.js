class user{
    constructor(email,password){
        this.email=email,
        this.password=password      
    }
    get password(){               
        return this._password.toUpperCase()
    }      
                    //getter and setter both are imp


    set password(value){
        this._password=value
    }

}
const rafeh= new user("rafeh@gmail.com","abc")
console.log(rafeh.password);

//ager mein ksi ko pass ka access dena ee ni chata

//get password pr lgaya uppercase
//set password pe value

//this._password is the actual internal storage for the password.
//  It’s not directly accessible from outside the class,
//  which is what you want to control access to the password.


