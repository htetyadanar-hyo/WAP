// inside function, var is not global.
// console.log(i);
// function foo(){
//     if(i){
//         var i = 10;
//         console.log("inside if ....");
//     }
//     else{
//         var m = 30;
//         console.log("inside else..");
//     }
// }
// console.log(i,m);

//for loop, block scope, any block scope, var is globla
console.log(i);
    if(i){
        var i = 10;
        console.log("inside if ....");
    }
    else{
        var m = 30;
        console.log("inside else..");
    }
console.log(i,m);

