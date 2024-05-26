let x = 10;
function foo(){
    let y = 20;
    const bar = function(z){
        return x + y + z;
    }
    //return bar; if don't return, function error
    return bar; //NaN
}
const result = foo()(30);
console.log(result); //y is closure.

