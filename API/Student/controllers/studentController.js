const Student = require('../models/student');

exports.getAllStudents = (req,res,next) => {
    res.status(200).json(Student.getAllStudents());
};

exports.getAllStudentsByCourseName = (req,res,next) => {
    res.status(200).json(Student.getStudentByCourseName(req.query.coursename));
};

exports.getStudentById = (req,res,next) => {
    res.status(200).json(Student.getStudentById(parseInt(req.params.studentId)));
};

exports.createStudent = (req,res,next) => {
    const newStudent = new Student(null,req.body.firstname,req.body.lastname,req.body.courses).save();
    res.status(201).json(newStudent);
};

exports.deleteById = (req,res,next) => {
    res.status(200).json(Student.deleteById(parseInt(req.params.studentId)));
};

exports.update = (req,res,next) => {
    new Student(null,req.body.firstname,req.body.lastname,req.body.courses).update(parseInt(req.params.studentId));
    res.status(204).end();
};

exports.addCourseByStudentId = (req,res,next) => {
    const stud = new Student(parseInt(req.params.studentId)).addingCourseByStudentId(req.body);
    res.status(201).json(stud);
}

exports.getAverage = (req,res,next) => {
    res.status(200).json({average:Student.getAverage(parseInt(req.params.studentId),req.query.semester)});
}