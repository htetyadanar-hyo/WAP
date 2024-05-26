'use strict';
let human2 = {
    name: 'htet',
    walk: function(){
        console.log(`${this.name} Walk.....`); //htet Walk..
        console.log(this); //{name: 'htet', walk: ƒ}
        const f = function log(){
            console.log(this);//undefined
        }
        f();
    }
};
human2.walk(); //No error

// 'use strict'; 
// function foo(){
//     console.log(this); //-> If you use strict, this is undefined.
// }
// foo();
// console.log(this); //->Even though use strict, it always window.
//Window

// 'use strict'
// var msg = "Hello World";
// console.log(this.msg); //Hello World
// console.log(this); //Window
// function log(){
//     console.log(this); //If strict mode, undefined
//     console.log(this.msg); //Error: Uncaught TypeError: Cannot read properties of undefined
// }
// log();

