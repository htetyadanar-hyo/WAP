//cannot be re-assigned new content.
// const age = 20;
// age += 1;
// console.log(age);

// only makes the variable itself immutable, not its assigned content • object properties can be altered
// • array elements can be altered
const fruits = ['Banana', 'Apple'];
// fruits =  ['Banana', 'Apple', 'Orange']; //Error: Cannot Assign
fruits.push('Orange');
console.log(fruits);

const point = { x: 1, y: 2 };
// point = {x:2, y:3}; //Error: Cannot Assign
point.x = 5;
console.log(point);