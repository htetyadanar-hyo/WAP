class User{
    #privatename;
    constructor(name) {
        this.name = name;
    }
    get name(){
        return this.#privatename;
    }
    set name(value){
        this.#privatename = value;
    }
}
let user = new User("John");
console.log(user.name);
user.name = "JJ"; //Calling the Setter
console.log(user.name); //Calling the Getter