const Student = require('../models/student.js');

exports.addCourse = (req,res,next) => {

    res.status(201).json(Student.addCourse(req.body,parseInt(req.params.studentId)));
};

exports.getAverage = (req,res,next) => {
    res.status(200).json({average: Student.getAverage(parseInt(req.params.studentId),req.query.semester)});
};