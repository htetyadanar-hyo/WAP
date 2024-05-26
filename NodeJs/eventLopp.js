// event loops => 6 callbacks (libuv)
// event loop => allows node to perform non-blocking(asynchronous) I/O operations
// libuv => support asynchronous
// 1 => timer
// 2 => I/O call back (pending call back) (fs.readFile)
// 3 => idle, prepare (Internally)
// 4 => poll
// 5 => check (setImmediate)
// 6 => close (e.g, socket.on('close')

// Node.js is single thread that means cannot run multi threads (Threads mean one app)
// Multi threads mean you can a lot of programs at a time.

// Browser => only two queues

// Node.js manages six different queues:
// nextTick, promise, timer, I/O, check, and close.

// Callbacks in the microtask queue are executed before callbacks in the I/O queue.
// nextTick is not natively provided by the libuv, but implemented in Node.
// process.nextTick (First Priority)
// new Promise (Second Priority)

// To add a task to the nextTick queue, we use the process.nextTick() method.
// To add a task to the promise queue, we resolve or reject a promise.
// To add a task to the timer queue, we use setTimeout() or setInterval().
// To add a task to the I/O queue, we execute an async method.
// To add a task to the check queue, we use the setImmediate() function.
// To add a task to the close queue, we attach close event listeners.
// The order of execution follows the same order listed here.
// However, it's important to note that the nextTick and promise queues are executed in between each queue
// and also in between each callback execution in the timer and check queues.

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//     console.log("this is setTimeout 2");
//     process.nextTick(() =>
//         console.log("this is inner nextTick inside setTimeout") );
// }, 0);
//
// setTimeout(() => console.log("this is setTimeout 3"), 0);
//
// new Promise(resolve => resolve('Hi'))
//     .then(() => console.log("this is Promise.resolve 1"));
// new Promise(resolve => resolve('Hi'))
//     .then(() => console.log("this is Promise.resolve 2"));
//
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => console.log("this is process.nextTick 2"));



// const fs = require('fs');
// fs.readFile('hello.txt', () => console.log('this is readFile 1'));
// new Promise(resolve => resolve('Hi'))
//     .then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));

//Output can be difference cause of 0 => it is actually 0 to 1 ms.
//This is setTimeout 1, This is readFile
//This is readFile, This is setTimeout 1
// const fs = require('fs');
// fs.readFile('hello.txt', () => console.log('This is readFile 1'));
// setTimeout(() =>console.log("This is setTimeout 1"),0);

//For loop is added to be guaranteed setTimeout (means to get setTimeout first before I/O
//Immediate is before I/O cause of poll for I/O.
//I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete
// const fs = require('fs');
// fs.readFile('hello.txt', () => console.log('this is readFile 1'));
// new Promise(resolve => resolve('Hi'))
//     .then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));
// for (let i = 0; i < 2000000000; i++) {}
//Ans:
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is setImmediate 1
// this is readFile 1


// console.log("start");
// setTimeout(()=>console.log("Timeout 1"));
// new Promise(resolve => resolve("Hi"))
//     .then((data)=>{
//         setTimeout(()=>console.log(data + "Timeout 2 Inside Promise"));
//     });
// process.nextTick(() => {
//     new Promise(resolve => resolve("Hello"))
//         .then((data) => console.log(data + " Promise 1 inside Trick"));
// });
// console.log("end");
//Ans:
// start
// end
// Hello Promise 1 inside Trick
// Timeout 1
// HiTimeout 2 Inside Promise

// console.log("Start");
// //Timer => 5000 is the time to get the console of inside that loop.
// setTimeout(()=>console.log("timeout 1"),5000);
// setTimeout(()=>console.log("timer 2"),2000);
// new Promise(resolve => resolve("Hi"))
//     .then(() => console.log("Promise 1"));
// new Promise(resolve => resolve("Hi"))
//     .then(() => console.log("Promise 2"));
// process.nextTick(()=> console.log("Next Tick 1"));
// process.nextTick(() => console.log("Next Tick 2"));
// console.log("End");
//Ans:
// Start
// End
// Next Tick 1
// Next Tick 2
// Promise 1
// Promise 2
// timer 2 (cause of timer second)
// timeout 1 (cause of timer second)

//To get I/O before immediate
// const fs = require("fs");
// fs.readFile('hello.txt', () => {
//     console.log("this is readFile 1");
//     setImmediate(() => console.log("this is setImmediate 1"));
//     process.nextTick(() =>
//         console.log("this is inner process.nextTick inside readFile")
//     );
//     Promise.resolve().then(() =>
//         console.log("this is inner Promise.resolve inside readFile") );
// });
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// for (let i = 0; i < 2000000000; i++) {}
// Ans:
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is readFile 1
// this is inner process.nextTick inside readFile
// this is inner Promise.resolve inside readFile
// this is setImmediate 1


// console.log("Start");
// fs.readFile('hello.txt',()=>console.log("I/O"););
// new Promise(resolve => resolve("Hi"))
//         .then(() => console.log("Promise 1"));
// process.nextTick(()=> console.log("Next Tick 1"))
// console.log("End");
//Ans:
// Start
// End
// Next Tick 1
// Promise 1
// I/O

// const fs = require("fs");
// fs.readFile("hello.txt",()=>console.log("This is read-file 1"));
// new Promise(resolve => resolve("Hi")).then(()=> console.log("This is Promise 1"));
// process.nextTick(()=>console.log("Next Tick1"));
// setTimeout(() => console.log("setTimeout 1"),0);
// setImmediate(() => console.log("setImmediate 2"));
// setImmediate(() => console.log("setImmediate 2"));
// for(let i=0; i < 20000000; i++){}
//Ans:
// Next Tick1
// This is Promise 1
// setTimeout 1
// setImmediate 2
// setImmediate 2
// This is read-file 1

// const fs = require("fs");
// fs.readFile("hello.txt",()=>{
//     console.log("This is read-file 1");
//     setImmediate(() => console.log("setImmediate 1"));
//     new Promise(resolve => resolve("Hi")).then(()=> console.log("This is Inner Promise 1"));
//     process.nextTick(()=>console.log("This is Inner Next Tick1"));
// });
// new Promise(resolve => resolve("Hi")).then(()=> console.log("This is Promise 1"));
// process.nextTick(()=>console.log("Next Tick1"));
// setTimeout(() => console.log("setTimeout 1"),0);
// for(let i=0; i < 20000000; i++){}
// Next Tick1
// This is Promise 1
// setTimeout 1
// This is read-file 1
// This is Inner Next Tick1
// This is Inner Promise 1
// setImmediate 1

//Close queue callbacks are executed after all other queue callbacks in a given iteration of the event loop.
//If you don't "on" readableStream, nothing happens.
//Order doesn't matter.
// const fs = require("fs");
// const readableStream = fs.createReadStream('hello.txt');
// readableStream.close();//***Subscriber (If this not exist, not show close).
// readableStream.on("close", () => {
//     console.log("this is from readableStream close event callback");
// }); //Sent to all Subscribers
// setImmediate(() => console.log("this is setImmediate 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Ans:
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is setImmediate 1
// this is from readableStream close event callback



// ****
// closed is before I/O because cannot go back to I/O (reverse dir)
const fs = require("fs");
fs.readFile('hello.txt',()=>console.log("I/O"));
const readableStream = fs.createReadStream("hello.txt");
readableStream.on("close",()=>{
    console.log("closed");
}); //Sent to all Subscribers
readableStream.close(); //Subscriber
setImmediate(() => console.log("setImmediate 1"));
new Promise(resolve => resolve("Hi")).then(()=> console.log("This is Promise 1"));
process.nextTick(()=>console.log("Next Tick1"));
setTimeout(() => console.log("setTimeout 1"),0);
for(let i=0; i < 20000000; i++){}
// Next Tick1
// This is Promise 1
// setTimeout 1
// setImmediate 1
// closed
// I/O

// function f(n){
//     return n + f(n-1);
// }
//
// function f2(n){
//     return n + process.nextTick(()=>f(n-1));
// }
// f(9); //Stack Overflow
// f2(9); //Not Stack Overflow, Just infinite loop