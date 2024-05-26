const a = require('./a'); //Show Directory and it is a.js, but no need to write .js
console.log("Inside b:",a);// {} because this is empty object in a.js file and {} in module.exports
a();


//There will be error because everything is being local by default
//Doesn't know other js file and it wrap
//console.log(i,j);

//1st
// {}
// Inside a
// Inside a: i=> 10
// inside a.js:  {}
// Inside b: [Function: f]
// Hello

//2nd
// {}
// Inside a
// Inside a: i=> 10
// inside a.js:  {}
// Hello
// Inside b: undefined
// a(); => a is not function
