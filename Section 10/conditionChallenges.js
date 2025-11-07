//Check is a number is greater than another.

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`); 
}

//checking a variable is a number or not.

let amount = "44";

if (typeof amount === "number") {
    console.log(`amount is given in ${typeof amount} `);
} else {
    console.log(`amount is not given in ${typeof amount}s`);
}

//Checking if a boolean value is true or false.

let isRaining = true;

if (isRaining) {
    console.log("It is raining");
} else {
    console.log("It is not raining");
}

//Checking if a string is empty or not.

let name = "Akhil";

if (name.length > 0) {
    console.log("String is not empty");
    
} else {
    console.log("String is empty");
}

//Checking if a array is empty or not.

let heros = ["spiderman", "batman", "ironman", "superman"];

if(heros.length > 0) {
    console.log("Array is not empty");
} else {
    console.log("Array is empty");
}