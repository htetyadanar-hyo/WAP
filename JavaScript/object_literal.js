const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    'my gender': 'F'
}
console.log(person.firstName);
console.log(person['my gender']);
person.firstName = 'Edward';
person.grade = 90;
console.log(person);

const user = {
    email: 'test@miu.edu',
    password: '123',
    //Method: method inside the object
    getInfo: function(){ 
        console.log(this.email + " " + this.password);
    }
}
console.log(typeof user); //object
console.log(user.email, user.password);//test@miu.edu 123,
console.log(user.getInfo());//test@miu.edu 123, undefined
user.getInfo();//test@miu.edu 123

const user2 = {
    name: "admin",
    'my grade': "A"
}
const myrole = "role";
const roleName = "123";
//user2.myrole = roleName;
user2[myrole] = roleName;
console.log(user2['my grade']); //A
console.log(user2); //{ name: 'admin', myrole: '123' }
