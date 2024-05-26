
// console.log("start");
// const result = new Promise(resolve => {
//     resolve(1);
// });
// console.log(result);
// console.log("end");

//start, Promise { 1 }, end


// console.log("start");
// const result = new Promise(resolve => {
//     resolve(1);
// }).then( data => {
//     console.log("result", data);
//     return data * 2;
// });
// console.log(result);
// console.log("end");

//start, Promise { pending }, end, result 1


/*****/
// console.log("start");
// const result = new Promise(resolve => {
//     resolve(1);
// }).then( data => {
//     console.log("result 1 ", data);
//     return data * 2;
// }).then(data => {
//     console.log("result 2 ", data);
// }).then(data => {
//     console.log("result 3 ", data);
// });
// console.log(result);
// console.log("end");

//****start, Promise { <pending> },end, 1 , 2, undefined

/*****/
// console.log("start");
// const result = new Promise(resolve => {
//     resolve(1);
//     return 5;
// }).then( data => {
//     console.log("result 1 ", data);
//     return data * 2;
// });
// console.log(result);
// console.log("end");
//****start, Promise { <pending> },end, 1


/*****/
// console.log("start");
// async function foo() {
//     const result = new Promise(resolve => {
//         resolve(1);
//     }).then(data => {
//         console.log("result 1", data);
//         return data * 2;
//     });
//     const resolvedResult = await result;
//     console.log(result);
//     console.log("resolvedResult", resolvedResult);
// }
// foo();
// console.log("end");
//start,end/ result 1 1, Promise { 2 }, resolvedResult 2