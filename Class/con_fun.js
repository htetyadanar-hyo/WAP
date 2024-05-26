function User(name){
    this.name = name;
}

User.prototype.sayHi = function(){
    console.log(this.name);
}

let user = new User("John");
user.sayHi();