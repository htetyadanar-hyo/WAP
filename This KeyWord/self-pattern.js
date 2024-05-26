//By using arrow function
const user = {
    salute: "",
    greet: function(){
        this.salute = "Hello";
        console.log(this.salute);
        const setFrench = (newSalute) => { 
            this.salute = newSalute;
        };
        setFrench("Bon");
        console.log(this.salute);
    }
}
user.greet();
console.log("By using self");
const userTwo = {
    salute: "",
    greet: function(){  
        console.log(this);
        this.salute = "Hello";
        console.log(this.salute);
        const self = this; 
        const setFrench = function(newSalute){
            console.log(this);  //Window
            self.salute = "Bon";
        }
        setFrench();
        console.log(this.salute);
    }
}
userTwo.greet();
console.log("By using bind");
const userThree = {
    salute: "",
    greet: function(){  
        console.log(this);
        this.salute = "Hello";
        console.log(this.salute);
        const setFrench = function(newSalute){
            console.log(this);  //Window
            this.salute = "Bon";
        }.bind(this);
        setFrench();
        console.log(this.salute);
    }
}
userThree.greet();//Hello John
// 'use strict'; //If use strict, error will show
console.log("By using call");
const user4 = {
    salute: "",
    greet: function(){  
        console.log(this);
        this.salute = "Hello";
        console.log(this.salute);
        const setFrench = function(newSalute){
            console.log(this);  //Window
            this.salute = "Bon";
        };
        //setFrench.apply(this);
        setFrench.call(this);
        console.log(this.salute);
    }
}
user4.greet();//Hello John