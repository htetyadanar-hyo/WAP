let animal = {
    eats: true,
    walk: function(){
        console.log("Walk");
    },
    sleep: function(){
        console.log("Sleeping");
    }
};

let rabbit = {
    jump: true
};

// deprecated way: __proto__
// The parent of rabbit is animal.
// [[Prototype]] is hidden, you cannot directly access them, or modify them
rabbit.__proto__ = animal;
rabbit.name = "Cotton rabbit";

//Inherit Properties
console.log(rabbit.eats); //true
console.log(rabbit.name); //Cotton rabbit
console.log(animal); //{ eats: true, walk: [Function: walk], sleep: [Function: sleep] }

//Inherit Methods
rabbit.walk();
rabbit.sleep();
console.log(rabbit); //{ jump: true, name: 'Cotton rabbit' }

console.log("_____________________________");

// 1. create an empty object {}
// 2. make the empty object's parent to be animal, [[Protytpe]] -> animal
// 3. assign the returned value to dog
let dog = Object.create(animal); 
dog.name = "Golden Retriver";

//Inherit Properties
console.log(dog.eats);
console.log(dog.name);
console.log(dog); // { name: 'Golden Retriver' }
console.log({}); //{}

//Inherit Methods
dog.walk();
dog.sleep();

console.log("_____________________________");

//Prototype chain
let person = {
    name: this.name,
    eat: function(){
        console.log("eating...");
    }
};

//Prototype Chain
// means itself is not, go to parent 
let father = Object.create(person);
father.name = "Father";
father.age = 23;
father.eat();
console.log(father);

let baby = Object.create(person);
baby.name = "Baby";
baby.age = 1;
baby.eat();
console.log(baby);

//Own properties do not use prototype chain
//Mean overriding
father.eat = function(){
    console.log("My Father is eating...");
}
father.eat();

console.log("_____________________________");

//methods often shared, object state generally not
//No matter where the method is found:
// ➢in an object or its prototype
// ➢this is always the object before the dot
let human = {
    name: 'Default',
    walk: function(){
        console.log(`${this.name} Walk.....`);
    },
    sleep: function(){
        this.isSleeping= true;
    }
};
let john = Object.create(human);
console.log(john); //{}
 john.name = "John";
john.walk(); //John Walk.....
john.sleep();
console.log(john);//{ name: 'John', isSleeping: true }

console.log(john.name); //John
console.log(human.name); //Default
console.log(human.walk()); //Default walk, undefined
console.log("_____________________________");






