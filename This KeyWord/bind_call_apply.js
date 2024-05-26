function foo(a,b,c){
    console.log(a,b,c);
    console.log(this);
}

//1. invoke a function ()
foo(1,2,3); //Cannot change this keyword to object
console.log("__________");
//2. call
foo.call({x:1,y:2}, 10, 20, 30); //change to {x:1,y:2} to this
foo.call("Hello", "a","b","c");
foo.call('a',1,2); // 1 2 undefined
foo.call(undefined); //Window
foo.call(null); //Window
console.log("__________");
//3. apply
foo.apply(['g','h'],[1,2,3]);
foo.apply(1, [20,30,40]);
foo.apply(1,[10]);
console.log("__________");
// -- bind ---will change this keyword, but not calling the function
// return another function to you with this keyword is binded
foo.bind({x:1,y:2},10)();
foo.bind("Hiiii",10,20,30)();
foo.bind(1,"H")();
const result = foo.bind(2,'a');
result('b');




