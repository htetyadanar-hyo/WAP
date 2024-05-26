const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/:studentId/courses/',studentController.addCourse);
router.get('/:studentId/getAverage',studentController.getAverage);

module.exports = router;