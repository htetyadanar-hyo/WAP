class Article{
    static publisher = "Hiii";
    constructor(title,date) {
        this.title = title;
        this.date = date;
    }
    static compare(article1, article2){
        return article1.date - article2.date;
    }
}
let articles = [
    new Article("HTML", new Date(2019,1,1)),
    new Article("CSS", new Date(2019,0,1)),
    new Article("Javascript", new Date(2019,11,1))
];
articles.sort(Article.compare); //Calling static methods
console.log(articles);
console.log(Article.publisher); //Calling static properties

