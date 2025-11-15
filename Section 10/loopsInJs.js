// const prompt = require("prompt-sync")();
//loops.
//--> Write a loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named "sum"

let sum=0;
let i = 1;

for (i; i<=5; i++){
    sum+=i
}
console.log(sum);

//-->Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
let limit = 5
const arr = [];
while (limit >= 1 ) {
    arr.push(limit);
    limit--;
}
console.log("Result:", arr);

//--> write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop". store each type in an array named "teaCollection".

// const teaCollection = []
// let input,cleanInput;

// do { 
//     input = prompt('Enter your favorite tea to store and enter stop to save:')
//     cleanInput = input.trim().toLocaleLowerCase();
//     if (cleanInput !== "stop") {
//         teaCollection.push(input.trim());
//     }

// }while(cleanInput !== "stop");
// console.log(teaCollection);


//--> write a "do while" loop that adds numbers from 1 to 3 and stores the result in a variable named "total".

i = 1;
let total = 0;
do {
total+=i
    i++
}while(i<=3);

console.log(total);

//-->Write a "for" loop that multiplies each element in the array '[2,4,6]' by 2 and the result in a new array name 'multipliedNumbers.'
let numArr = [2, 4, 6]
let multipliedNumbers = [];

for (let i = 0; i < numArr.length; i++){
    multipliedNumbers.push(numArr[i]*2) ;
}

console.log(multipliedNumbers);

//--> Write a 'for' loop that lists all the cities in the array ["Paris","New York","Tokyo","London"] and stores each city in a new array named 'cityList'

const cities = ["Paris", "New York", "Tokyo", "London"];
const myCities = [];
for (let i = 0; i < cities.length; i++){
    myCities.push(cities[i]);
    console.log(i+1,cities[i]);
}
console.log(myCities);



