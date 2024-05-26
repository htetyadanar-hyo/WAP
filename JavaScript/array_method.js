const elements = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

// const result = elements.filter(item => item.length > 10);
// console.log(result);

const resultTwo = elements.filter((item,index,array) => {
    console.log(item, index, array);
    //if not return, the last one is {}
    //return item.length > 7; the last one is {'Hydrogen','Beryllium'}
})
console.log(resultTwo); //Result can be different based on the return
//if you want to find something, please use find, because find is falsy, and filter is trusy if you don't return.

//Just Find the first one
const res = elements.find(item => item.length > 7);
console.log(res);

//Find all of elements
const res1 = elements.filter(item => item.length > 7)
    .map(item => item.toUpperCase())
console.log(res1)

const res5 = elements.filter(item => item.length > 7);
console.log("res5:" + res5); //res5: Hydrogen,Beryllium

const grades = [91, 82, 73, 94, 85, 76];

const sum = grades.reduce((accum,item,index,array) => (accum + item),0);
console.log(sum);

const filterGrades = grades.filter(g => g>80);
console.log(filterGrades);

const avg = grades.reduce((accum,item) => (accum+item),0)/grades.length;
//** Wrong const avg2 = grades.reduce((accum,item,index,array)=>(accum+index)/array.length,0);
console.log(avg);


