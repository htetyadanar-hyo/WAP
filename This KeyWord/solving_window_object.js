//How to solve this from window to object

// Function Declaration
function foo(){
    console.log("Function Foo this:",this);
}

function add(a,b){
    console.log("Function Add this:",this);
    console.log(a + b);
}

// Object and its method and its inner function
const user = {
    name: "Htet",
    age: 23,
    arr: [1,2,3],
    sayHi: function(){
        console.log("Method this inside object:",this);
        console.log(`Hi! ${this.name}`);
        // this.arr.forEach(function(a){
        //     console.log("This of Inner Method of Object: " + this);
        //     console.log(`${this.name}` + a);
        // });
        // // 1. Solve By Call
        // const log = function(a){
        //     console.log(`${this.name} ` + a);
        // }
        // this.arr.forEach(a => {
        //     log.call(user,a);
        // })
        // 2. Solve by Apply
        // const log = function(a){
        //     console.log(`${this.name} ` + a);
        // }
        // this.arr.forEach(a => {
        //     log.call(user,[a]);
        // })
        // 3. Solve by Bind
        this.arr.forEach(function(a){
            console.log(`${this.name} ` + a);
        }.bind(this));
    }
}
//Before Solve
foo();
add(1,2);
//user.sayHi();

console.log("------------------------");
// 1. Solve .call() method
foo.call({x:1,y:2});
add.call({x:1,y:2},1,2);
//user.sayHi();

console.log("------------------------");
// 2. Solve .apply() method
foo.apply({x:1,y:2});
add.apply({x:1,y:2},[1,2]);
user.sayHi();

console.log("------------------------");
// 3. Solve .bind() method
foo.bind({x:1,y:2});
add.bind({x:1,y:2},1,2)();
user.sayHi();

