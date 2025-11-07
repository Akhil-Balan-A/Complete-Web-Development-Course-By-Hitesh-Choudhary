//Number
let balance = 120;

let anotherBalance = new Number(120);

console.log(balance);
console.log(typeof balance);

console.log(anotherBalance);
console.log(typeof anotherBalance);

console.log(balance === anotherBalance);//false cause they are different objects

//boolean

let isRaining = true;

let isReallyActiv = new Boolean(true);

console.log(isRaining);
console.log(typeof isRaining);

console.log(isReallyActiv);
console.log(typeof isReallyActiv);

console.log(isRaining === isReallyActiv);//false cause they are different objects

//null and undefined

let firstName;// can define with undefined also, same result.

console.log(firstName);
console.log(typeof firstName);

firstName = null;

console.log(firstName);
console.log(typeof firstName);

//string

let myName = "Akhil";
let anotherName = new String("Akhil");

console.log(myName);
console.log(typeof myName);

console.log(anotherName);
console.log(typeof anotherName);

let value = `value is : ${2+2}` // template literals
console.log(value);

//Symbol
let sm1 = Symbol(5);
let sm2 = Symbol(5);

console.log(sm1 == sm2);//false cause they are different objects



