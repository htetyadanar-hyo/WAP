
console.log('start');
const result = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => reject('Whoops!'), 1000);
    console.log(2);
})
.then(res => res)
    .catch(error => 'Error Happens');
console.log(result);
console.log('end');

//start, 1, 2, Promise{<pending>}, end