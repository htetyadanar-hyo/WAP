let x = 10;
function foo(y){
    const bar = function(z){
        return x + z;
    }
    return bar;
}
const result = foo(2)(30);
console.log(result); //There is closure for x;