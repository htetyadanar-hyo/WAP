let x = 10;
function foo(){
    let x = 20; // 10
    x = 20 // 20
    bbb();
}
function bbb(){
    console.log(x);
}
foo(); // 10 10

let y = 10;
function foo2(){
    let y = 20;
    bbb();
    function bbb(){
        console.log(y);
    }
}
foo2(); // 10 20