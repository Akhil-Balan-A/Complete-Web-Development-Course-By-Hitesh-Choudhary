//Object
const userName = {
    name: "Akhil",
    isLoggedIn: true,
}

userName.name = "Akhil Balan A" // this works becuas it changes only the values of the object.

// userName = {
//     name: "Balan AV",
//     isLoggedIn: false, // this wond works since it changes whole object
// }
console.log(userName);
console.log(typeof userName);

//Date
let today = new Date();

console.log(today);
console.log(`Today is : ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`);
console.log(typeof today);

//Array
let heros = ["spiderman", "batman", "ironman", "superman"];

console.log(heros);
console.log(typeof heros);
console.log(heros.length);
console.log(heros[2]);

let isValue = "2abc"
console.log(Number(isValue)) // NaN not a number
console.log(typeof Number(isValue)) // number - NaN is teeated as number in js even it's explanation it self is contrary.

let Null = null
console.log(typeof Null)//oject cause Null is a type of object
console.log(typeof Number(Null)); // number 

let Undefined = undefined 
console.log(typeof Undefined) // undefined 
console.log(typeof Number(Undefined));// number


