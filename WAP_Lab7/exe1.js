// 1. Using Arrow Function
let group = {
    title: "Our Group",
    students: ["John","Pete","Alice"],
    showList: function(){
        this.students.forEach(student => {
            console.log(this.title + ":" + student);
        });
    }
};
group.showList();

// 2. Using Bind
// let group = {
//     title: "Our Group",
//     students: ["John","Pete","Alice"],
//     showList: function(){
//         this.students.forEach(function(student){
//             console.log(this.title + ":" + student);
//         }.bind(this));
//     }
// };
// group.showList();

// 3. Using Variable
// let group = {
//     title: "Our Group",
//     students: ["John","Pete","Alice"],
//     showList: function(){
//         let self = this;
//         this.students.forEach(function(student){
//             console.log(self.title + ":" + student);
//         });
//     }
// };
// group.showList();

//4. Using apply functon
let group = {
    title: "Our Group",
    students: ["John","Pete","Alice"],
    showList: function(){
        const result = function(student){
            console.log(this.title + ":" + student);
        }
        this.students.forEach(s => result.apply(group,[s]));
    }
}
group.showList();

//5. Using invoke function
// let group = {
//     title: "Our Group",
//     students: ["John","Pete","Alice"],
//     showList: function(){
//         let self = this;
//         this.students.forEach(function(student){
//             console.log(self.title + ":" + student);
//         },this);
//     }
// };
// group.showList();

