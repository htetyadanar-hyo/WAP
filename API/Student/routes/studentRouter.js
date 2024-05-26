const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/',studentController.getAllStudents);
router.get('/search',studentController.getAllStudentsByCourseName);
router.get('/:studentId',studentController.getStudentById);
router.post('/',studentController.createStudent);
router.delete('/:studentId',studentController.deleteById);
router.put('/:studentId',studentController.update);
router.post('/:studentId/courses',studentController.addCourseByStudentId);
router.get('/:studentId/getAverage',studentController.getAverage);

module.exports = router;
