//Borrowing function from me to you
const me = {
    fname: 'John',
    lname: 'Smith',
    getFullName: function(){
        return `${this.fname} ${this.lname}`;
    }
}
console.log(me.getFullName());

const you = {
    fname: 'Edward',
    lname: 'Smith'
}

console.log(me.getFullName.call(you));
console.log(me.getFullName.apply(you));
console.log(me.getFullName.bind(you)());

//Borrowing getFullName function in log
const log = function(height, weight){
    console.log(this.getFullName(), height, weight);
}
log(); //Error: this.getFullName() not a function because this.getFullName is undefined
log.call(me, 12, 20);
log.bind(me, 12, 30)();
log.apply(me, [12, 30]);