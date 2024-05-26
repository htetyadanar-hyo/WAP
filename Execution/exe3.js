let a = 1;
let b = 2;
function foo() {
    let a = 3;
    let b = 4;
    bar(a);
    console.log(a, b);
    function baz(arg1, arg2, arg3) {
        console.log(arg1, arg2, arg3);
        b = arg1 + arg2;
        a = arg1 + arg2;
    }
    const f = () => { console.log(a, b) };
    baz(5, 10, f, 40, 50); //Check how to draw here.
    console.log(a, b);
}
foo();
function bar(arg1, arg2) {
    console.log(arg1, arg2);
    a = arg1 + 40;
}
console.log(a, b);
//foo();