// 1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. Store the result in a variable named 'teaOrder`.

// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`
// }

// let result = makeTea('green tea');

// console.log(result);

// 2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like "Order confirmed for chai"`. Call `confirmOrder` from within `orderTea` and return the result.

// function orderTea(teaType) {
//     function confirmOrder() {
//         return `Order confirmed for ${teaType}`;
//     }
//     return confirmOrder()
// }

// let result = orderTea('green Tea');

// console.log(result);

// 3. Write an arrow function named 'calculateTotal that takes two parameters: `price` and `quantity`. The
// function should return the total cost by multiplying the `price` and `quantity`.
// Store the result in a variable named 'totalCost`.

// const calculateTotal = (price,quantity)=> {
//     return price * quantity;

// };

// let totalCost = calculateTotal(10, 5);

// console.log(totalCost);

// 4. Write a function named 'processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.Return the result of calling `makeTea`.

// function processTeaOrder(callback) {

//     return callback('earl grey')
// }

// function makeTea(tea) {
//         return tea
// }

// let result = processTeaOrder(makeTea);

// console.log(result);

// 5. Write a function named 'createTeaMaker` that returns another function. The returned function should ///take one parameter, `teaType`, and return a message like `"Making green tea"`.Store the returned function in a variable named`teaMaker and call it with "green tea"`.

// function createTeaMaker() {
//     return function (teaType) {
//         return `Making ${teaType}`
//     }
// }

// let teaMaker = createTeaMaker()

// let message = teaMaker('green tea');
// console.log(message);

////////////////////////////////// Types of functions ////////////////////////////////////////////

// 1. Function declaration
// greet(); // Hoisted (can be called before it's defined)

// function greet() {
//     console.log('This is Function Declaration');
// };

//2. Function expression

// const greet = function () {
//     console.log("This is Function Expression");

// }
// greet()// Not hoisted useful when passing functions as values.

//3. Arrow Functions(ES6+)

// const greet = (type) => {
//     console.log(`This is ${type} function`);

// };

// greet('arrow');// Not hoisted, usefull for callbaback, No own this, arguments, super

// window.name = 'Balan'
// global.name = 'Balan' //my global variable
// var name = "Balan";
// const obj = {
//     name: 'Akhil',
//     regularFun: function () {
//         console.log('Regular:',this.name);

//     },
//     arrowFun: () => {
//         console.log('Arrow:', this.name);

//     }
// };

// obj.regularFun();

// obj.arrowFun();

//4.Anonymous Function

// setTimeout(function() {
//     console.log('Anonymous Function');

// }, 1000);

//5. Named Function Expression.

// const greet = function sayHello() {
//     console.log("Named function expression");

// };

//6. IIFE.

// (function myFunction() {
//     console.log("This is a IIFE function");

// })()

//7. Constructor Function

// function Person(name,place) {
//     this.name = name;
//     this.place = place
// }

// const p1 = new Person("Akhil",'thrissur');

// console.log(p1);

//8. Generator Function

// function* myGenerator() {
//     console.log("Starting Generator");
//     yield 1;
//     console.log('After first yield');
//     yield 2;
//     console.log('After second yield');
//     yield 3;
//     console.log('Ending generator');
//     return 'Finished';

// }

// let generator = myGenerator();

// generator.next();
// generator.next();
// generator.next();
// generator.next();

// //9.Async function

// async function fetchData() {
//     let response = await fetch("url")
// }

// fetchData()

//////////////////// Async Function + Real API////////////////////////
// ✅ Async function fetching time data
// async function fetchTime(city = "Asia/Kolkata") {
//   try {
//     const response = await fetch(`https://worldtimeapi.org/api/timezone/${city}`);
//     const data = await response.json();
//     console.log(`Time in ${city}:`, data.datetime);
//   } catch (error) {
//     console.error("Failed to fetch time:", error);
//   }
// }

// fetchTime(); // You can call with other cities like 'Europe/London'

////////////////// Generator functin and its usage ////////////////////////

// ✅ Generator function
// function* cookEgg() {
//   console.log("Start cooking...");

//   yield "Step 1: Boil water";
//   yield "Step 2: Add egg to boiling water";
//   yield "Step 3: Wait for 10 minutes";
//   yield "Step 4: Remove egg and cool";
//   yield "Done! Egg is ready 🍳";
// }

// const steps = cookEgg();

// // Simulate steps with delay
// function executeSteps(generator) {
//   const step = generator.next();
//   if (!step.done) {
//     console.log(step.value);
//     setTimeout(() => executeSteps(generator), 2000); // 2 sec delay
//   }
// }

// // executeSteps(steps);
// let result1 = steps.next();
// console.log(result1.value);
// // executeSteps(steps);
// let result2 = steps.next();
// console.log(result2.value);
// // executeSteps(steps);
// let result3 = steps.next();
// console.log(result3.value);
// // executeSteps(steps);
// let result4 = steps.next();
// console.log(result4.value);
// // executeSteps(steps);
// let result5 = steps.next();
// console.log(result5.value);


////////////////// regular function and arrow function and this on both //////////////

// this.name = 'Balan'; // make sure it's on the global object

// const obj = {
//     name: 'Akhil',
//     regularFun: function () {
//         console.log('Regular:', this.name);
//     },
//     arrowFun: () => {
//         console.log('Arrow:', this.name); // gets 'Balan' from global this
//     }
// };

// obj.regularFun(); // Regular: Akhil
// obj.arrowFun();   // Arrow: Balan
