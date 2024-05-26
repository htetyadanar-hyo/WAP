
// console.log('start');
// async function f(){
//     return 1;
// }
// console.log(f());
// console.log('end');

//start, Promise { 1 }, end


// console.log('start');
// function f(){
//     return 1;
// }
// console.log(f());
// console.log('end');

//start, 1, end

// console.log('start');
// function f(){
//     console.log('done');
//     return 1;
// }
// const hi = f(); //done
// console.log(f()); //done, 1
// console.log(hi); // 1
// console.log('end');

//start, done, done, 1, 1, end


// console.log('start');
// async function f(){
//     console.log('done');
//     return 1;
// }
// const hi = f(); //done
// console.log(f()); //done, Promise { 1 }
// console.log(hi) // Promise { 1 }
// console.log('end');

//start, done, done, Promise { 1 }, Promise { 1 }, end


// console.log('start');
// const promise = new Promise(resolve => {
//     console.log('done');
//     resolve(1);
// });
// console.log(promise);
// console.log('end');

//start, done, Promise { 1 }, end

// console.log('start');
// async function f(){
//     return 1;
// }
// f().then(console.log);
// console.log('end');

//start, end, 1


// console.log('start');
// async function foo(){
//     console.log("Inside foo...");
// }
// foo();
// console.log("end");


//start, Inside foo..., end


// console.log('start');
// async function foo() {
//     console.log('Inside foo...');
// }
// const result = foo();
// console.log(result);
// console.log('end');

//start, Inside foo..., Promise{ undefined }, end


// console.log('start');
// async function foo() {
//     console.log('Inside foo...');
//     return 1;
// }
// const result = foo();
// console.log(result);
// console.log('end');

//start, Inside foo..., Promise{ 1 }, end


/******/
// console.log('start');
// async function foo() {
//     console.log('Inside foo...');
//     // Introduce a delay to keep the promise pending for a short period
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return 1;
// }
// const result = foo();
// console.log(result);
// console.log('end');
// result.then(data => console.log(data));

//start, Inside foo.., Promise { <Pending> }, end, 1


// console.log('start');
// async function foo() {
//     console.log('Inside foo...');
//     return 1;
// }
// const result = foo();
// console.log(result);
// result.then(data => console.log('Data: ', data));
// console.log('end');

//start, Inside foo..., Promise{ 1 }, end, Data: 1

/****/
// console.log('start');
// async function foo() {
//     console.log('Inside foo...');
//     return 1;
// }
// const result = foo();
// console.log('end');

//start, Inside foo..., end

/****/
// console.log('start');
// async function foo() {
//     console.log('Inside foo...');
//     return 1;
// }
// console.log('end');

//start, end


// console.log('start');
// const result = async function foo() {
//     console.log('Inside foo...');
//     return 1;
// }
// console.log('end');

//start, end

