const Book = require('../models/book');

exports.getAllBooks = (req,res,next) => {
    res.status(200).json(Book.getAll());
};

exports.getBookById = (req,res,next) => {
    res.status(200).json(Book.getProductById(parseInt(req.params.id)));
};

exports.saveBook = (req,res,next) => {
    const newBook = new Book(null,req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    res.status(201).json(newBook);
};

exports.deleteBookById = (req,res,next) => {
    res.status(200).json(Book.deleteById(parseInt(req.params.id)));
};

exports.updateBook = (req, res, next) => {
    const updateBook = new Book(null,req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author);
    updateBook.update(parseInt(req.params.id));
    res.status(204).end();
}