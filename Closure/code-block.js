// {
//     let i = 10;
//     const j = 20;
// }
// console.log(i,j);

const i = 10;
if(i){
    let m = 1;
}
else{
    let n = 2;
}
console.log(m,n); //m is not defined.
//EC will be 2

for(let i=0; i<10; i++){
    console.log(i);
}
console.log(i);
//EC will 11

for(var k=0; k<10; k++){
    console.log(k);
}
console.log(k); // EC will 1

