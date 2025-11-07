//data types (8 types)

//Primitive
//1. string - ""
//2. number - 0
//3. boolean - true or false
//4. null - null (empty value)
//5. undefined - undefined
//6. bigint - 0n
//7. symbol - symbol

//Non-primitive
//8. object - (aray,function,date, regex, error, promise, iterator, generator, async function, typed array, web assembly, proxy, iterable, async generator, async iterable, array buffer, shared array buffer, atomics, data view, json)


// Defining each data type

var string = "Hello";
var number = 0;
var boolean = true;
var Null = null;
var undefined = undefined;
var bigint = 0n;
var symbol = Symbol();
var object = {};

console.log(typeof string);//Result would be string
console.log(typeof number);//Result would be number
console.log(typeof boolean);//Result would be boolean
console.log(typeof Null);//Result would be object because Null is a type of object
console.log(typeof undefined);//Result would be undefined
console.log(typeof bigint);//Result would be bigint
console.log(typeof symbol);//Result would be symbol
console.log(typeof object );//Result would be object

console.log(typeof function () { }); //Result would be function because function is a type of object


let score; //declaration
score=500; //initialization
let score1 = 500; //declaration with initialization
console.log(score);

let getScore = score;//assignment of variable to another variable (shallow copy)
console.log(getScore);