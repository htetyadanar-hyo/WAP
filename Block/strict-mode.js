// 'use strict';
// {
//     var i = 10;
//     let j = 10;
// }
// function foo(){
//     var i = 10;
// }
// foo();
// console.log(i); //i is not defined

// 'use strict';
// var msg = "Hello";
// i = "Hi";
// console.log(msg); //It works
// console.log(i); //It doesn't work

'use strict';
var m = "M";
i = 12;
function log(){
    console.log(m); //NoError
    console.log(i); //Error
    console.log(this.m); //Error because of this  
}
log();

