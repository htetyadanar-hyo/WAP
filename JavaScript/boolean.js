// //const result = -1 && 12 && "abc" && [] && {} && true;
//const result = false || 0 || 0.0 || '' || null || undefined || NaN ;
if(result) {
    console.log('Inside Truthy.....'); //result
} else {
    console.log('Inside Falsy!!!!!');
}


// const test = 0 && ""; //False
// const test = 0 || ""; //False
// const test = 22 && "abc"; //True
// const test = 22 || "abc"; //True
if(test){
    console.log("True");
}
else{
    console.log("False");
}

console.log("IE6" == 0); //false
console.log("" == 0); //true

