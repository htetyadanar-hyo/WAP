function User(username){
    console.log(this); // this = {}
    this.username = username; //this -> {username: 'John'}
    this.isAdmin = false; // this-> {username: 'John', isAdmin: false}
    // return this
}
const john = new User("John"); //{username: 'John', isAdmin: false}
console.log(john);

const edward = new User('Edward');
console.log(edward);
