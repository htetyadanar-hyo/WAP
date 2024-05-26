const obj = {
    0: "Zero",
    1: "One",
    2: "Two",
    length: 3
}
for(let i=0; i<obj.length; i++){
    console.log(obj[i]);
}

const obj2= {
    0: "Zero",
    1: "One",
    2: "Two",
}
for(const key in obj2){
    console.log(obj2[key]);
}

const arr = [1,2,3,4];
for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
}

const obj3 = {
    0: "Zero",
    1: "One",
    2: "Two",
    length: 3
};
for(let i=0; i < obj3.length; i++){
    console.log(obj3.i); //undefined
    console.log(obj3[i]); //Correct answer
}