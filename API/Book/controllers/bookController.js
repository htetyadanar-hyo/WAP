const Book = require('../models/book');

// exports.getAllBooks= (req,res,next)=>{
//     res.status(200).json(Book.getAllBooks());
// };

exports.getAllBooksByQueryString = (req,res,next) => {
    res.status(200).json(Book.getAllBooksByFirstName(req.query.firstname));
};

exports.getBookById = (req,res,next)=>{
    res.status(200).json(Book.getBookById(parseInt(req.params.id)));
};

exports.createBook = (req,res,next) => {
    const newBook = new Book(null,req.body.title,req.body.author).save();
    res.status(201).json(newBook);
}

exports.deleteBookById = (req,res,next) => {
    res.status(200).json(Book.deleteBookById(parseInt(req.params.id)));
}

exports.updateBook = (req,res,next) => {
    new Book(null,req.body.title,req.body.author).update(parseInt(req.params.id));
    res.status(204).end();
}



