let x = 10;
function foo(x){
    let y = 20;
    const bar = function(z){
        return x + y + z;
    }
    return bar //NaN
}
const result = foo()(30);
console.log(result); //x and y are closure.