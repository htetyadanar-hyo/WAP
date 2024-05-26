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
    constructor(studentId, firstname, lastname, courses){
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;
    }

    static getAllStudents(){
        return students;
    }

    static addCourse(course, studentId){
        const sIndex = students.findIndex(s => s.studentId === studentId);
        if(sIndex > -1){
            const cIndex = students[sIndex].courses.findIndex( c => c.courseId === course.courseId);
            if(cIndex > -1){
                students[sIndex].courses[cIndex] = course;
            }else{
                students[sIndex].courses.push(course);
            }
            return students[sIndex];
        }else{
            throw new Error(`Student doesn't exist with ID: ${studentId}`);
		}
	}

	static getAverage(studentId,semester){
		let avg = 0;
		const sIndex = students.findIndex ( s => s.studentId === studentId);
		if(sIndex > -1){
			if(semester === undefined){
				avg = students[sIndex].courses.reduce((x,y) => x+y.grade/students[sIndex].courses.length,0);
			}
			else{
					const filterSemester = students[sIndex].courses.filter ( se => se.semester === semester);
                    if(filterSemester.length > 0){
                        avg = filterSemester.reduce((x,y)=>x + y.grade/filterSemester.length,0);
                    }
				else{
					throw new Error(`Courses doesn't exist with semester: ${semester}`);
                }
			}
            return avg;
		}else{
			throw new Error(`student doesn't exist with ID: ${studentId}`);
        }

    }

    save(){
        this.studentId = idCounter++;
        students.push(this);
        return this;
    }
}