let books = [
    {id: 1, title: 'Book 1', ISBN: '1001', publishedDate: new Date('2017-01-01'), author: 'Jack'},
    {id: 2, title: 'Book 2', ISBN: '1002', publishedDate: new Date('2015-01-01'), author: 'Edward'},
    {id: 3, title: 'Book 3', ISBN: '1003', publishedDate: new Date('2016-01-01'), author: 'Suzi'},
]
let idCounter = 4;
module.exports = class Book{
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        return books;
    }
    static getProductById(id){
        const book = books.find(b => b.id === id);
        if(book){
            return book;
        }
        else{
            throw new Error(`Not Found Book with id: ${id}`);
        }
    }
    save(){
        this.id = idCounter++;
        books.push(this);
        return this;
    }
    static deleteById(id){
        const index = books.findIndex(b => b.id === id);
        if(index > -1){
            const temp = books[index];
            books.slice(index,1);
            return temp;
        }
        else{
            throw new Error(`No Product found id: ${id}`);
        }
    }
    update(id){
        const index = books.findIndex(b => b.id === id);
        if(index > -1){
            this.id = id;
            books[index] = this;
        }else{
            throw new Error(`No Product found id: ${id}`);
        }
    }
};