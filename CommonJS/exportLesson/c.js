const a = require('./a');
console.log(a.mul(3,4)); //12

//Destructing
const { div } = require('./a'); //div should be the same as a. js file
console.log(div(4,2)); // 2

const multi = require('./a').mul;
console.log(multi(2,4)); //8

