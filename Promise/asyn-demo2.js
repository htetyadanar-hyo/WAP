
console.log('start');
async function foo(){
    //return new Promise((resolve,reject) => reject(new Error('Whooops!'));
    throw new Error('Whoops!');
}
const result = foo();
//If you don't catch the error, you will see the error.
console.log(result);
result.then( data => console.log(data))
    .catch(err => console.log("Whoops!!!!!!"));
console.log('end');

//start, Promise { Error: 'Whoops!'}, end, Whoops!!!

