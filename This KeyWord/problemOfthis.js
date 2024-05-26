const user = {
    firstname: "John",
    sayHi: function(){
        console.log(this); //Object
        console.log(`Hi, ${this.firstname}`); //Hi, John
    },
    sayHello(){
        console.log("hello");
    }
}

user.sayHi();
user.sayHello();

//this is window because setTimeout is global function.
setTimeout(user.sayHi,100); //Hi, undefined (because you are losing this)


// 1. wrapper
setTimeout(function(){
    user.sayHi();
},1000);

//2. Arrow Function
setTimeout(() => user.sayHi(), 1000);

//3. Call + Wrapper
setTimeout(() => user.sayHi.call(user),1000);

//4. Apply + Wrapper
setTimeout(() => user.sayHi.apply(user), 1000);

//5. Bind
setTimeout(user.sayHi.bind(user), 1000);
