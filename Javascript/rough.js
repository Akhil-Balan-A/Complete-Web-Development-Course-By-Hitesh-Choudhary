// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);

let arr = [1, 2, 2, 3, 4, 4, 5];

let mySet = new Set(arr);

let uniqueArr = Array.from(mySet);

console.log(uniqueArr);




