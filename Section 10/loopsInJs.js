const prompt = require("prompt-sync")();
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

const teaCollection = []
let input;
do { 
    input = prompt('Enter your favorite tea to store and enter stop to save:')
    if (input.toLocaleLowerCase() !== "stop") {
        teaCollection.push(input);
    }

}while(input.toLowerCase() !== "stop");
console.log(teaCollection);
