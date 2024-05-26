function outer(){
    return function inner(){
        return function nestedinner(){
            console.log("Hii");
        }
    }
}
outer()()();