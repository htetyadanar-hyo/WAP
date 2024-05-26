
// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
// });
// console.log('end');

//Start, Promise1, End


// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     resolve("Hello World!");
// });
// promise.then(data => console.log(data));
// console.log('end');

//Start, Promise1, End, Hello World

/****/
// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     resolve("Hello World");
// });
// console.log(promise);
// promise.then(data => console.log(data));
// console.log('end');

//Start, Promise1, Promise { 'Hello World!' }, End, Hello World

/****/
// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     resolve("Hello World");
// }).then(data => console.log(data));
// console.log(promise);
// console.log('end');

//Start, Promise1, Promise { <Pending> }, End, Hello World

/*****/
// console.log('start');
// let promise = new Promise(function(resolve, reject) {
//     console.log("promise 1");
//     setTimeout(() => {
//         resolve("Hello World");
//     }, 1000); // Delay of 1 second
// });
// console.log(promise);
// promise.then(data => console.log(data));
// console.log('end');

//start, promise 1, Promise{ <Pending> }, end, Hello World

// console.log('start');
// new Promise(function(resolve,reject){
//     console.log("promise 1");
//     resolve("Hello World!");
// });
// console.log('end');

//start, promise 1, end

// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     setTimeout(() => resolve("Hello World"),2000);
// });
// promise.then(data => console.log(data));
// console.log('end');

//Start, Promise1, End, Hello World(takes 2s)


// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     reject(new Error("Reject 1"));
// });
// console.log('end');

//Start, Promise1, End,   {reject(new Error("Reject 1"))}=>error


// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     reject(new Error("Reject 1"));
// });
// //If you don't catch the reject, you will see error.
// promise.then(data => console.log(data))
//     .catch(err => console.log("Whoops"));
// console.log('end');

//Start, Promise1, End, Whoops

/*****/
// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     reject(new Error("Reject 1"));
//     resolve("Hello World");
// });
// promise.then(data => console.log(data))
//     .catch(err => console.log("Whoops!"))
//     .finally(() => console.log("Finally!"));
// console.log('end');

// start, promise 1, end, Whoops, Finally

/*****/
// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     resolve("Hello World");
//     reject(new Error("Reject 1"));
//
// });
// promise.then(data => console.log(data))
//     .catch(err => console.log("Whoops!"))
//     .finally(() => console.log("Finally!"));
// console.log('end');

// start, promise 1, end, Hello World, Finally

// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     reject(new Error("Reject 1"));
// });
// promise.then(data => console.log(data))
//     .catch(err => console.log(err.message))
//     .finally(() => console.log("Finally!"));
// console.log('end');

// start, promise 1, end, Reject 1, Finally


// console.log('start');
// let promise = new Promise(function(resolve,reject){
//     console.log("promise 1");
//     setTimeout(() => reject(new Error("Reject 1")),1000);
// });
// promise.then(data => console.log(data))
//     .catch(err => console.log("Whoops"))
//     .finally(() => console.log("Finally!"));
// console.log('end');

//start, promise 1, end, (Whoops, Finally) takes 1s

