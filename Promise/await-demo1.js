
// console.log('start');
// async function foo(){
//     return 'done';
// }
// async function bar(){
//     console.log("Inside bar - start");
//     let result = await foo();
//     console.log(result);
//     console.log('inside bar - end');
// }
// bar();
// console.log('end');

//start, Inside bar - start, end, done, inside bar - end

//Without await

// console.log('start');
// async function foo(){
//     return 'done';
// }
// async function bar(){
//     console.log("Inside bar - start");
//     let result = foo();
//     console.log(result);
//     console.log('inside bar - end');
// }
// bar();
// console.log('end');

//start, Inside bar - start, Promise { 'done' }, inside bar - end, end