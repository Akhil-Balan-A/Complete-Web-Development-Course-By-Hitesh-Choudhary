//Array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const string = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
const boolean = [true, false, true, false, true, false, true, false, true, false]
const mixed = [1, "two", true, false, 2, "three", true, false, 3, "four",null, undefined,NaN, ]//array elements can be of different types.
console.log(mixed);
//--> Arrays are object types and can be accessed by index. Index starts from 0.
//--> Arrays are mutable.

//--> Creation of array using array literal.
const salad = ["tomato", "cucumber", "onion", "spinach", "pepper"];
// console.log(salad);
//--> Creation of array using new Array() constructor.
const fruits = new Array("apple", "banana", "orange", "grape", "watermelon");
console.log(fruits);//alswyas try to add more than 1 element in the method, if there is only one element and that is number then it will make a empty array with length of given number.
  
//-->Creation of array using constructor function. 

function Heros(...name) {
    this.name = name    
}
 
const heros = new Heros("spiderman", "batman", "ironman", "superman");
console.log(heros.name);

//--> Creationg of array using Array.of() method.

const arr = Array.of(1, 2, 3, 4, 5);
console.log(arr);


//--> Creation of array using Array.from() method.

const place = Array.from("Hello");// ['h', 'e', 'l', 'l', 'o'] converts string to array
console.log(place);

//--> Usig Spread Operator (...)

const oldArr = [1, 2, 3];
const newArr = [...oldArr];
console.log(newArr);
const merged = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4] can also merge two arrays
console.log(merged);

//--> Using Array.fill() method.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.fill(0); // [0, 0, 0, 0, 0]
console.log(arr2);


//--> Using concat() method.

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = arr3.concat(arr4); // [1, 2, 3, 4, 5, 6]
console.log(arr5);

//--> Using split() method (fron String to Array);

const sentence = "hello world";
const words = sentence.split(" ");
console.log(words)


//loop in array

const vegtables = ["tomato", "cucumber", "onion", "spinach", "pepper"];

for (let i = 0; i < vegtables.length; i++){
    console.log(`Element at index of ${i}:`,vegtables[i]);
}

//Push() method - add an element to the end of the array.
let result = vegtables.push("carrot");
console.log("result is new count of elements in array: ",result);
console.log(vegtables);

//pop() method - remove an element from the end of the array.
result = vegtables.pop();// here the poped element will get stored.
console.log(result);
console.log(vegtables);

//shift() method - remove an element from the beginning of the array.
result = vegtables.shift();
console.log(result);
console.log(vegtables);

//unshift() method - add an element to the beginning of the array.
result = vegtables.unshift(result);
console.log(result);// here the new count of element will get saved in the result
console.log(vegtables); // new array with added item at the first index.

//copy of an array

const vegtablesCopy = vegtables // just anothe name for the same reference.
console.log(vegtables === vegtablesCopy);

const vegtablesCopy1 = [...vegtables]; // shallow copy (top-level only  object reference are still shared)
vegtables.push("kdkjkdj")
console.log(vegtables===vegtablesCopy1);
console.log(vegtablesCopy1)
const vegtablesCopy2 = structuredClone(vegtables);// true hard copy no reference sharing whats ever.
console.log(vegtables===vegtablesCopy2)

//Array Destructuring.
const vegies = ["🧅", "🍅", "🍆", "🥦"]
const [ onion, tomato, bringal, brocoli,potato="not available" ] = vegies;//can gvien default value if no array values again it, then it will return default value as result.

console.log(onion, tomato, potato);

console.log(vegies[0], vegies[vegies.length - 1])








