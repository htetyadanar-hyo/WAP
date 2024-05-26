// const log = function(){
//     console.log(this); //Window
//     console.log("Hello"); 
// }
// setTimeout(log(),1000); //Hello
// console.log("hiii");
///Window, hello, hiiii

// const log2 = function(){
//     console.log(this); //Window
//     console.log("Hello"); 
// }
// setTimeout(log2,1000); 
// console.log("hiii");
//hiii,window,hello

const user = {
    firstname: "John",
    sayHi(){
        console.log(this); 
        console.log(`${this.firstname}`);
    }
}
setTimeout(user.sayHi(),1000); //{name: 'Htet',log3:f}, Htet but will be immediately executed.
setTimeout(user.sayHi,1000); //Window, undefined