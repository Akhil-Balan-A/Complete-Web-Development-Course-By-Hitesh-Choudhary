//Nested Array

let fruitsAndVeg = ["🥝", "🍍", "🍎", "🥭", "🍓", ["🍅", "🫑", "🍆"]];

let [tomato, bellPepper] = fruitsAndVeg[5];
console.log(tomato, bellPepper);

let eggPlant = fruitsAndVeg[5][2]
console.log(eggPlant);

fruitsAndVeg[fruitsAndVeg.length - 1].push("🥒");

console.log(fruitsAndVeg);

//Rest and Sprea (rest will be before assignment and spread after)

let fruits = ["🥝", "🍍", "🍎", "🥭", "🍓"];

const [kiwi, pineapple,...others] = fruits;

console.log(kiwi, pineapple, others);

let fruitsCopy = [...fruits];

console.log(fruitsCopy);

//Swapping Variables.

let num1 = "1";
let num2 = "2";
//swap using temp
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log("num1:", num1, "num2:", num2);

//swap using Array
[num1, num2] = [num2, num1];
console.log()
console.log("num1:", num1, "num2:", num2);

//Array Merging using spread

const gaming = ["🎮", "🖥️", "⌨️", "🖱️", "🎧", "💺", "🕹️"];
const music = ["🎸", "🥁", "🎹", "🎺", "🎻", "🎤", "🪘"];

const mergedArray = [...gaming, ...music];

console.log(mergedArray);









