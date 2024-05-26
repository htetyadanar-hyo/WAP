function User(username = 'Default'){
    this.username = username;
    this.isAdmin = false;
}
console.log(User.prototype);

const john = new User();
console.log(john);

console.log(john.__proto__ === User.prototype);
console.log(john.hasOwnProperty('username'));
console.log(john.hasOwnProperty('bind'));

const edward = new User('Edward');
console.log(edward);
console.log(john.__proto__ === User.prototype);
console.log(john.hasOwnProperty('username'));
console.log(john.hasOwnProperty('bind'));