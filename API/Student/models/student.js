let students = [
    {
        studentId: 610001,
        firstname: "John",
        lastname: "Smith",
        courses: [
            {
                courseId: "CS303",
                coursename: "Peb Application Programming in JavaScript",
                semester: "2021-Spring",
                grade: 99
            },
            {
                courseId: "CS445",
                coursename: "Modern Asynchronous Programming", 
                semester: "2021-Spring",
                grade: 95
            },
            {
                courseId: "CS445",
                coursename: "Modern Asynchronous Programming",
                semester: "2020-Spring",
                grade: 95
            }
        ]
    },
    {
        studentId: 610002,
        firstname: "Edward",
        lastname: "Jack",
        courses: [
            {
                courseId: "CS472",
                coursename: "Web Application Programming", 
                semester: "2021-Spring",
                grade: 82
            },
            {
                courseId: "CS544",
                coursename: "Web Application Architecture", 
                semester: "2021-Spring",
                grade: 88
            }
        ]
    }
];
let idCounter = 610003;

module.exports = class Student{
    constructor(studentId,firstname,lastname,courses){
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;
    }

    static getAllStudents(){
        return students;
    }

    static getStudentById(studentId){
        // const stu = students.find(s => s.studentId === studentId);
        // if(stu){
        //     return stu;
        // }
        // else{
        //     throw new Error(`No Student found with id: ${studentId}`);
        // }
        const index = students.findIndex(s => s.studentId === studentId);
        if(index > -1){
            return students[index];
        }else{
            throw new Error(`No Student Found with id: ${studentId}`);
        }
    }

    static getStudentByCourseName(coursename){
        return students.filter(s =>
            s.courses.some(c => c.coursename.toLowerCase().startsWith(coursename.toLowerCase()))
        );
    }

    addingCourseByStudentId(course){
        const sindex = students.findIndex(s => s.studentId === this.studentId);
        console.log(students.courses);
        if(sindex > -1){
            const cindex = students[sindex].courses.findIndex(c => c.courseId === course.courseId);
            if(cindex > -1){
                students[sindex].courses[cindex] = course;
            }
            else{
                students[sindex].courses.push(course);
            }
            return students[sindex];
        }
        else{
            throw new Error(`No Student Found with id: ${this.studentId}`);
        }
    }

    save(){
        this.studentId = idCounter++;
        students.push(this);
        return this;
    }

    static deleteById(studentId){
        const index = students.findIndex(s => s.studentId === studentId);
        if(index > -1){
            const temp = students[index];
            students.splice(index,1);
            return temp;
        }
        else{
            throw new Error(`No Student Found with id: ${studentId}`);
        }
    }

    update(studentId){
        const index = students.findIndex(s => s.studentId === studentId);
        if(index > -1){
            this.studentId = studentId;
            students[index] = this;
        }
        else{
            throw new Error(`No Student Found with id: ${studentId}`);
        }
    }

    static getAverage(studentId,semester){
        const sindex = students.findIndex(s => s.studentId === studentId);
        let average = 0;
        if(sindex > -1){
            if(semester !== undefined){
                const seIndex = students[sindex].courses.findIndex(c => c.semester === semester);
                if(seIndex > -1){
                    const filteredSemester = students[sindex].courses.filter(c => c.semester === semester);
                    average = filteredSemester.reduce((x,y) => x + y.grade/filteredSemester.length,0 );
                }
                else{
                    throw new Error(`No Semester Found with semester: ${semester}`);
                }
            }
            else {
                average = students[sindex].courses.reduce((acc, cur, index, array) => acc + cur.grade / array.length, 0);
            }
            return average;
        }
        else{
            throw new Error(`No Student Found with id: ${studentId}`);
        }
    }
}

