'use strict';
function User(username = 'Default'){
    this.username = username;
    this.isAdmin = false;
    // return {
    //     firstname: 'John',
    //     lastname: 'Smith'
    // }
    return ['abcd'];
}
const john = new User();
console.log(john);

const edward = new User('Edward');
console.log(edward);
console.log(edward.username);