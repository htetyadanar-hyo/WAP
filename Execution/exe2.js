let x = 1;
function foo() {
let y = 2;
function bar() {
let z = 3;
function baz() {
console.log(z);
console.log(y);
console.log(x);
console.log(w);
}
baz();
}
bar();
}
foo();