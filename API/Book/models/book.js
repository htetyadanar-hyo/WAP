let books = [
    {
        bookId: 1,
        title: "Node.js",
        author: {
            authorId: 303,
            firstname: 'Edward',
            lastname: 'Jack'
        }
    },
    {
        bookId: 2,
        title: "Angular",
        author: {
            authorId: 308,
            firstname: 'John',
            lastname: 'Smith'
        }
    }
];
let idCounter = 3;
module.exports = class Book{
    constructor(bookId, title, author){
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }



    static getBookById(id){
        const bk = books.findIndex(b => b.bookId === id);
        if(bk > -1){
            return books[bk];
        }
        else{
            throw new Error(`No book found id: ${id}`)
        }
    }

    static getAllBooksByFirstName(firstname){
        let result = books.filter(b=> b.author.firstname.toLowerCase().includes(firstname.toLowerCase()));
        if(result.length > 0){
            return result;
        }
        else{
            throw new Error(`No book found id: ${firstname}`)
        }
    }

    save(){
        this.bookId = idCounter++;
        books.push(this);
        return this;
    }

    static deleteBookById(id){
        const index = books.findIndex(b => b.bookId === id);
        if(index > -1){
            const temp = books[index];
            books.splice(index, 1);
            return temp;
        }
        else{
            throw new Error(`No book found with id: ${id}`);
        }
    }

    update(id){
        const index = books.findIndex(b => b.bookId === id);
        if(index > -1){
            this.bookId = id;
            books[index] = this;
        }
        else{
            throw new Error(`No book found with id: ${id}`);
        }
    }
};
