//this in method (know the object)
//That's why in method, please just use function declaration
// const user = {
//     firstname: 'John',
//     sayHi: function(){
//         console.log(this);
//         console.log(`Hi, ${this.firstname}`);
//     }
// }
// user.sayHi();

//this in arrow function, just know global
// const y = {
//     a: 1,
//     b: 2,
//     add: () => {
//         console.log(this); //window
//         console.log(this.a); //undefined
//         return this.a + this.b; //NaN
//     }
// }
// console.log(y.add());

// const x = {
//     a: 1,
//     b: 2,
//     add: function(){
//         console.log(this); // {a: 1, b: 2, add: ƒ}
//         console.log(this.a); //1
//         return this.a + this.b; //3
//     }
// }
// console.log(x.add());

//Show arrow functions inherit their this from the surrounding scope
// function foo(){
//     const bar = () => console.log("Arrow Function: " , this);
//     console.log("Inside Foo..", this);
//     bar();
// }
// foo();
// foo.call({fname: "Name"}); //{fname: 'Name'}
// foo.apply("Htet");
// foo.bind([1,2,3])();

//Normal Function Declaration & Function Expression
// function foo(){
//     function bar(){
//         console.log(this);
//     }
//     console.log("Inside Foo..", this);
//     bar();
// }
// foo();
// foo.call({fname: "Htet"});

// function foo(){
//     const bar = function(){
//         console.log(this);
//     }.bind(this);
//     console.log("Inside Foo..", this);
//     bar();
// }
// foo();
// foo.apply({x:1,y:2});

//Even Though use "call", this cannot change object because, the surronding is global, not object.
//If add is inner, it will change. Check one below:
// console.log(this);
// const add = (num1,num2) => {
//     console.log(this);
//     return num1 + num2;
// }
// add(1,2);
// add.call({x:1,y:2},5,6);

// console.log(this);
// function h(){
//     const add = (num1,num2) => {
//         console.log("Inside: " + this);
//         return num1 + num2;
//     }
//     add(2,3);
// }
// h(1,2);
// h.call({x:1,y:2});

//Here, arrow is global 
//arrow functions inherit their this from the surrounding scope
// let group = {
//     title: "Our Group",
//     students: ["John","Pete","Alice"],
//     showList: function(){
//         console.log(this);
//         this.students.forEach(s => {
//             console.log(this);
//             console.log(this.title + ":" + s);
//         });
//     }
// };
// group.showList();








