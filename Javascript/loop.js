//Q-1: print from 1 to 10;

//////////////////////////////////////////////////// For Loop ////////////////////////////////////////////





//////////////////////////////////////////////////// While Loop ////////////////////////////////////////////

//find the sum of all the numbers from 1 to 100 using while loop.

// let i = 1;
// let limit = 100;
// let sum = 0;
// while (i <= limit) {
//     sum+=i
//     i++
    
// }

// console.log(sum);

//Write a while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.

// let i = 5;
// let limit = 1;
// let count = 0;
// let array = []
// while (i >= limit) {
//     count += 1
//     array.push(i)
//     i--

// }
// console.log(count);
// console.log(array);

//////////////////////////////////////////////////// Do While Loop ////////////////////////////////////////////
//Write a do while loop that prompts a user to enter their favorite tea type until they enter "stop".
//store each tea type in an array named 'teaCollection'.
const prompt = require("prompt-sync")();
let teatype;
let teaCollection = [];

do {
teatype = prompt("Enter your favorite tea types and use stop when the list finish to exit: ")
if(teatype!='stop')
    teaCollection.push(teatype);
} while (teatype != "stop")

console.log(teaCollection);
    



//////////////////////////////////////////////////// For/in ////////////////////////////////////////////
//////////////////////////////////////////////////// for/of ////////////////////////////////////////////
//////////////////////////////////////////////////// forEach ////////////////////////////////////////////
