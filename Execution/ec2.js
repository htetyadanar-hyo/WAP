var x = 10;
var y = 20;
function foo(a,b){
    let z = 30;
    var x = 40;
    console.log(a,b);
    y = a +z + x;
}
foo(x);
console.log(x,y);