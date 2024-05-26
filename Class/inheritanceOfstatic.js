class Animal{
    constructor(name){
        this.name = name;
    }

    run(speed){
        this.speed += speed;
        console.log(`Running ${speed}`);
    }
    stop(){
        console.log("Stopping");
    }
}
//How to inherit Animal
class Rabbit extends Animal{

    //Overriding constructor with super
    constructor(name, earlength) {
        super(name);
        this.earlength = earlength;
    }
    hide(){
        super.stop(); //Overriding a method with super
        console.log("Hide");
    }
    static compare(animal1, animal2) {
        return animal1.earlength - animal2.earlength;
    }
}

let rabbits = [
    new Rabbit("White Rabbit",12),
    new Rabbit("White Rabbit",10),
]
rabbits.sort(Rabbit.compare);
console.log(rabbits);
// [
//     Rabbit { name: 'White Rabbit', earlength: 10 },
//     Rabbit { name: 'White Rabbit', earlength: 12 }
// ]

