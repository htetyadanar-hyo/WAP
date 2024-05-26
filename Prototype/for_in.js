const animal = {
    eat: true,
    walk: function(){
        console.log("Walk...");
    }
}

const rabbit = Object.create(animal);
rabbit.jumps = true;
rabbit.longEar = true;
console.log(Object.keys(rabbit)); // return own keys in a string array

for(let property in rabbit){
    //console.log(property,rabbit[property]);
    if(rabbit.hasOwnProperty(property)){
        console.log("Own Property: ",property, rabbit[property]);
    }
    else{
        console.log("Inherited: ",property, rabbit[property]);
    }
}

