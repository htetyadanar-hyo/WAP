console.log(this);
console.log("Inside a");
var i = 10;
let j = 20;
console.log("Inside a: i=>",i);
console.log("inside a.js: ", module.exports);
function f(){
    console.log("Hello");
}
//1st
module.exports = f;

//2nd
module.exports = f(); //If you change, b also change





