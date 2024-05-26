const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

// router.get('/',bookController.getAllBooks);

router.get('/',bookController.getAllBooksByQueryString);

router.get('/:id',bookController.getBookById);

router.post('/',bookController.createBook);

router.delete('/:id',bookController.deleteBookById);

router.put('/:id',bookController.updateBook);

module.exports = router;