'use strict'
var msg = "Hello World";
console.log(this.msg); //Hello World
console.log(this);
function log(){
    console.log(this); //If strict mode, undefined
    console.log(this.msg); //Error: Uncaught TypeError: Cannot read properties of undefined
}
log();
