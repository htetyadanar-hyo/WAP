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
}

let rabbit = new Rabbit("White Rabbit",12);
rabbit.run(5);
rabbit.hide();
console.log(rabbit.earlength);

// Running 5
// Stopping
// Hide
// 12
