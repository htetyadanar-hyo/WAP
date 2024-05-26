foo(); //TypeError: foo is not a function

var foo = function (){
    console.log("Foo ...");
}

//if let or const variable, Error is changed to not initialized.