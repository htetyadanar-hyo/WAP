// 1. Can’t use await in regular functions.
// async function foo(){
//     return 'done';
// }
//
// function bar(){
//     let result = await foo(); //syntax error
//     console.log(result);
// }
// bar();

//2. await won’t work in the top-level code(code that is not inside any function)
// async function baz(){
//     return 'baz.....';
// }
//
// let result = await baz(); // syntax error
// console.log(result);

//Correct way for 2
async function baz(){
    return 'baz.....';
}

(async () => {
    let result = await baz();
    console.log(result);
})();
//baz..