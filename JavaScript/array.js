const arr = [1, 2, 3];
console.log(arr.length); //3
// This is fine, we're modifying the array, not reassigning it
arr.push(4); // arr is now [1, 2, 3, 4]

// Adding an index
arr[5] = 6; // arr is now [1, 2, 3, 4, <Empty>, 6]

// Reassigning the variable is not allowed
// arr = [10, 20, 30]; // This would cause an error

const num = [];
num[0] = 1;

//Not Like Java, length for both are the same.
console.log(num.length); //1
const str = "String";
console.log(str.length); //1

//Put into the last index
num.push(2);
num[6] = 6;
console.log(num);

//Remove the last item
console.log("PoP:" + num.pop());

//Unshift - Put into the first index
num.unshift(3);
console.log(num);

//Shift - Remove the first item
console.log("Shift:" + num.shift());

const countries = ['US', "Canada"];
countries[2] = 123;
countries[3] = ['1', 'h'];
countries[4] = {x:1, y:2}
console.log(countries);
console.log(countries.length);