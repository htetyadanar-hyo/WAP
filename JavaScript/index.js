for(let i=0; i<5; i++){
    console.log(i);
}
const result = 2 || 0;
if(result){
    console.log(true);
}
else{
    console.log(false);
}

//Template Literal
const name = "htet";
let str = `This is ${name}
a  line
string`;
console.log(str);

//null & undefined are not the same
//if you unassign anything, the default is undefined.
let t;
console.log(t);

function foo(){
    console.log("Hello");
}
console.log(foo());

//Object Literal definition
const x = {
    fname : "htet",
    'my age' : 23,
    getInfo: function (){ //Method
        return "Hello";
    }
}
console.log(x.fname, x.getInfo(), x['my age']);
x.fname = "Jane";
x.grade = 99;
console.log(x.fname, x['my age'],x.grade);

const myadmin = "admin";
const role = "Guest";
x.myadmin = role; /*****/
console.log(x);

//Function
function sum(n){
    return n + n;
}
console.log(sum(3));

//.pop()-> remove last
//.push() -> add last
//.unshift() -> add first
//.shift() -> remove first

//filter -> findAll, find -> only find once
const e =[
    1,2,3,4,5
];
const r = e.filter((item,index,array)=>{
    console.log(item,index,array);
    //return item.length > 7;
    return item.length > 17;
    });
console.log(r);

const grades = [1,2,3,4,5];
const sumTwo = grades.reduce((accum,item,index,array)=>(accum+item),0);
console.log(sumTwo);

//No Overloading in js
//Just use the last one, try yourself

//argument
function sumOne(){
    let sum = 0;
    for(let i=0; i<argument.length; i++){
        sum += argument[i];
    }
    return sum;
}
sumOne();
sumOne(1);
sumOne(1,2);
sumOne(1,2,3);
sumOne(1,2,3,4,5,6);

//
const obj = {
    0: 'hello',
    1: 'world',
    length: 2
}
for(let i=0; i<obj.length; i++){
}

//Rest
function sumTwo(x,y,...rest){
    console.log(x,y,rest);
}
sumTwo();
sumTwo(1);
sumTwo(1,2);
sumTwo(1,2,3);
sumTwo(1,2,3,4,5,6);

//Spread js
const b = "hello";
const m = [...b];
console.log(m);

//How to write console
[1,2,3].forEach(console.log());

//Destructing assignment
const arr = [12,23,"Hello"];
const[a, ,h] = arr;
const[o,p] = arr;
console.log(a,h);
console.log(o,p);

let options = { //Variable name should be the same as properties name
    title: "Menu",
    width: 12
}
const {title, width} = options;
console.log(title, width);

const {title: ll, width: w} = options;
console.log(ll,w);

