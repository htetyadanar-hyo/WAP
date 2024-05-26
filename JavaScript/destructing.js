const arr = [1,22,"hello"];

//Destructing assignments for array
const [a, ,b] = arr;
console.log(a,b); //1 hello
const [i,j] = arr;
console.log(i,j); // 1 22

//Destructing assignments for object literal
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
const {height, title, author} = options;
console.log(title,author,height); //Menu undefined 200

const{title: t, height: h} = options
console.log(t,h) //Menu 200

//Destructing the function declaration
function process({firstname,lastname}){
    console.log(firstname,lastname);
}
process({firstname:'Jon',lastname:'Smith'}); //Jon Smith




