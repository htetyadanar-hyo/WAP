
// console.log('start');
// const promise = new Promise(function(resolve,reject){
//     console.log('Inside Promise 1');
//     if(Math.random()>0.5){
//         setTimeout(()=> resolve("Hello"),2000);
//     }
//     else{
//         setTimeout(()=> reject("Whoops!"),2000);
//     }
//     console.log("Inside Promise 2");
// });
// console.log('end');

//start, Inside Promise 1, Inside Promise 2 , end
//start, Inside Promise 1, Inside Promise 2, end, Error

// console.log('start');
// new Promise(function(resolve,reject){
//     console.log('Inside Promise 1');
//     if(Math.random()>0.5){
//         setTimeout(()=> resolve("Hello"),2000);
//     }
//     else{
//         setTimeout(()=> reject("Whoops!"),2000);
//     }
//     console.log("Inside Promise 2");
// });
// console.log('end');

//start, Inside Promise 1, Inside Promise 2 , end
//start, Inside Promise 1, Inside Promise 2, end, Error

/*****/
// console.log('start');
// const promise = new Promise(function(resolve,reject){
//     console.log('Inside Promise 1');
//     if(Math.random()>0.5){
//         setTimeout(()=> resolve("Hello"),2000);
//     }
//     else{
//         setTimeout(()=> reject("Whoops!"),2000);
//     }
//     console.log("Inside Promise 2");
// });
// promise
//     .then((arg1,arg2)=> console.log(arg1,arg2))
//     .catch(err => console.log(err))
//     .finally(() => console.log("Finally!"));
// console.log('end');

//start, Inside Promise 1, Inside Promise 2, end, (Hello undefined, Finally!) take 2s
//start, Inside Promise 1, Inside Promise 2, end, (Whoops, Finally!) take 2s

/****/
// console.log('start');
// const promise = new Promise(function(resolve,reject){
//     console.log('Inside Promise 1');
//     if(Math.random()>0.5){
//         setTimeout(()=> resolve("Hello"),2000);
//     }
//     else{
//         setTimeout(()=> reject("Whoops!"),2000);
//     }
//     console.log("Inside Promise 2");
// });
// console.log(promise);
// promise
//     .then((arg1,arg2)=> console.log(arg1,arg2))
//     .catch(err => console.log(err))
//     .finally(() => console.log("Finally!"));
// console.log('end');

//start, Inside Promise 1, Inside Promise 2, Promise { <Pending> }, end, (Hello undefined, Finally!) take 2s
//start, Inside Promise 1, Inside Promise 2, Promise { <Pending> }, end, (Whoops, Finally!) take 2s


// console.log('start');
// const promise = new Promise(function(resolve,reject){
//     console.log('Inside Promise 1');
//     if(Math.random()>0.5){
//         setTimeout(()=> resolve("Hello"),2000);
//     }
//     else{
//         setTimeout(()=> reject("Whoops!"),2000);
//     }
//     console.log("Inside Promise 2");
// });
// promise
//     .finally(() => console.log("Finally!"));
// console.log('end');

//start, Inside Promise 1, Inside Promise 2, end, (Finally!) take 2s
//start, Inside Promise 1, Inside Promise 2, end, (Finally!), Error take 2s



