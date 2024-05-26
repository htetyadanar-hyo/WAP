// In Node.js, you do not have access to the window object as you would in a browser environment.
// Instead, Node.js provides a global object and several built-in modules like fs, http, and path,
// which are automatically available and are specifically designed to support server-side operations.

// In Node.js, "everything being local by default" means that variables and functions declared within a module (file) are local to that module
// and not accessible from other modules unless explicitly exported. Each module has its own scope, which helps in avoiding global namespace pollution and ensures better modularity.

//The document object that represent DOM of the webpage is nonexistent in Node.js.

/*****/
console.log(global);
global.myGlobalVar = "Hello, World";
console.log(global.myGlobalVar);

var length = 20;
function foo(){
    console.log(this.length);
    return 2;
}
const x =foo(); //undefined
console.log(foo()); //undefined , 2
console.log(x);
//In Node, output is undefined. (Cause of this => not refer to global)
//In Browser, output is 20;