const user = {
    name: 'admin',
    pw: 123,
    getInfo: function(){
        console.log("Hello");
    }
}
console.log(user.getInfo());//Hello, undefined

function foo(){
    console.log("Hello...");
}
console.log(foo()); //Hello...,undefined

function foo2(){
    
}
console.log(foo2());//undefined

function foo3(){   
    console.log("Hi");
    return "Hi";
}
console.log(foo3());//Hi Hi

function foo4(){     
    return "Hi";
    console.log("Hi");
}
console.log(foo4());//Nothing Output

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