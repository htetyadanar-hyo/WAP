function Student(firstName,lastName){
    this.firstname = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.computeAverage = function(){
    return this.grades.reduce((x,y)=>x+y/this.grades.length,0);
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
};

const john = new Student("John","Smith");
john.inputNewGrade(90);
john.inputNewGrade(89);
john.inputNewGrade(85);
console.log(john.grades);
console.log(john.computeAverage());

const edward = new Student("Edward","Smith");
edward.inputNewGrade(100);
edward.inputNewGrade(98);
edward.inputNewGrade(85);
console.log(edward.grades);
console.log(edward.computeAverage());


