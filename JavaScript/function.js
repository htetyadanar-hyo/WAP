console.log("Function Declaration----------")
//Function Declaration
console.log(square(2));
function square(num){
    return num * num;
}
console.log(square(2));


//Function Expression
console.log("Function Expressionn----------")
console.log(square2(2)); //=> Error cause of constant, Cannot access 'square2' before initialization
//console.log(square2(2)); //=> If var, TypeError: square2 is not a function
const square2 = function(num){
    return num * num;
}
console.log(square2(2));
console.log(typeof square, typeof square2);

//Arrow Function
console.log("Arrow Function----------")
const square3 = num => num * num;
console.log(square3(2));
console.log(typeof square3);

const isEven = (n1,n2) => {
    if(n1 % 2 == 0 && n2 %2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(2,4));

//General Knowledge
console.log("----------------");
function sum(n1,n2){
    return n1 + n2;
}
console.log(sum()); //NaN
console.log(sum(1)); //NaN
console.log(sum(1,2)); //3
console.log(sum(1,2,3)); //3
console.log(sum("hello")); //helloundefined

//Overload only the last one
console.log("----------------");
function log(){
    console.log("No arguments!");
}
function log(x){
    console.log("One Arguemnt");
}
function log(x,y){
    console.log("Two Arguemnt");
}
log(); //Two Arguemnt
log('hello'); //Two Arguemnt
log('hello','world'); //Two Arguemnt
log('hello','world','!!!'); //Two Arguemnt

//By using js arguments
console.log("----------------");
function addTwo(){
    //console.log(arguments); //argument is array like object.
    let result = 0;
    for(let i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    console.log(result);
}
addTwo(); //0
addTwo(1,2); //3
addTwo(1,2,3); //6
addTwo('hello'); //0hello

//Using Rest
console.log("----------------");
function add(x,y,...rest){
    console.log(x,y,rest); //rest is array
}
add(); //undefined undefined []
add(1); //1 undefined []
add(1, 2); //1 2 []
add(1, 2, 3); //1 2 [3]
add(1, 2, 3, 9, 8, 7, 6); //1 2 [3,9,8,7,6]
