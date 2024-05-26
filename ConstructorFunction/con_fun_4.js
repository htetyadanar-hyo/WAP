function Student(firstname = 'Default', lastname ='Default'){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = 18;
    //Taking too much space
    this.print = function(){
        console.log(`${this.firstname} ${this.lastname} ${this.age}`);
    }
}

//Not taking too much space
Student.prototype.getStudentInfo = function(){
    console.log(`${this.firstname} ${this.lastname} ${this.age}`);
}

const john = new Student('John','Smith');
john.print();
const edward = new Student('Edward','Smith');
edward.print();
john.getStudentInfo();
edward.getStudentInfo();