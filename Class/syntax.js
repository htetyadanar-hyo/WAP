class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
// When new User("John") is called:
// ➢ A new object is created.
// ➢ The constructor runs with the given argument and assigns it to this.name
// ➢ …Then we can call object methods, such as user.sayHi().

let user = new User("John");
user.sayHi();

console.log(typeof User); //User is a function


