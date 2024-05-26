// you define a variable, and the value is null
let str = null;
console.log(str); //null
//you define a varibale and didn't assign a value, 
// so the default is undefined
let str2;
console.log(str2); //undefined

function foo(){
    console.log('inside foo');
}
console.log(foo()); //inside foo, undefined

function foo2(){
    return 'Hello';
}
foo2(); //Nothing Output

function foo3(){
    console.log("Hello");
}
foo3(); //Hello

function foo4(){   
    console.log("Hi");
    return "Hi";
}
console.log(foo4());//Hi Hi

function foo5(){     
    return "Hi";
    console.log("Hi");
}
console.log(foo5());//Nothing Output

function foo6(){

}
console.log(foo6()); //undefined

