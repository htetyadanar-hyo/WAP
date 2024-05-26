function foo(){
    var i = 10;
    console.log(i);
}
foo();

// 1. immediately executed the code
// 2. i is not exposed to global
(function(){
    var i = 10;
    console.log(i);
})();

(function(){
    var i = 15;
    console.log(i);
}());
//console.log("Outside", i);