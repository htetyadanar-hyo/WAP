
// module.exports.sayHi = function(){
//     console.log("hi");
// }

//{ sayHi: [Function (anonymous)] }
// hi


// // //module is an object
// // //exports is a property of module
// module.exports.person = {
//     fname: "John",
//     lname: "Smith"
// };

// { person: { fname: 'John', lname: 'Smith' } }
// John


// module.exports.sayHi = function(){
//     console.log("hi");
// }
// module.exports.person = {
//     fname: "John",
//     lname: "Smith"
// };

// {
//   sayHi: [Function (anonymous)],
//   person: { fname: 'John', lname: 'Smith' }
// }



// let sayHi = function(){
//     console.log("hi");
// }
// module.exports = sayHi;
// module.exports.person = {
//     fname: "John",
//     lname: "Smith"
// };

//[Function: sayHi] { person: { fname: 'John', lname: 'Smith' } }
// John
// hi

module.exports = {
    firstname: "John",
    lastname: "Smith",
    sayHi(){
        console.log("Hi");
    }
}

//{ firstname: 'John', lastname: 'Smith', sayHi: [Function: sayHi] }
// John
// Hi
