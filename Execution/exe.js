var a = 2;
let b = 3;
function outer() {
    let c = 5;
    var d = 7;
   return function inner() {
        b = 8; let c = 9;
        console.log(a); 
        console.log(b); 
        console.log(c); 
        console.log(d); 
} }
outer()();