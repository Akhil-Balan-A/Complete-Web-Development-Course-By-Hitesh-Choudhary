//Q-1: print from 1 to 10;

//////////////////////////////////////////////////// For Loop ////////////////////////////////////////////
//Write a for loop that multiplies each element in the array"[2,4,6]" by 2 and stores the result in a new array named multipliedNumbers.

// let arr = [2, 4, 6];
// let multipliedNumbers = [];
// for (let i = 0; i < arr.length;i++){
//     newArr.push(arr[i]*2);
// }

// console.log(newArr);

//Write a for loop that loops through the array ['green tea','black tea','chai','oolong tea'] and stops the loop when it finds "chai". Store all teas before "chai" in an new array named 'selectedTeas'.

// let teas = ['green tea', 'black tea', 'chai', 'oolong tea'];
// let selectedTeas = [];

// for (let i = 0; i < teas.length; i++){
//     if (teas[i] === "chai") {
//         break;
//     }
//     selectedTeas.push(teas[i]);
// }

// console.log(selectedTeas);

//Write a for loop that loops through the array "["London","New York","Paris","Berlin"]" and skips "Paris".
//store the other cities in a new array named 'visitedCities'.

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// for (let i = 0; i < cities.length; i++){
//     if (cities[i] === 'Paris'||cities[i]==='paris') {
//         continue;
//     }
//     visitedCities.push(cities[i]);
// }
// console.log(visitedCities);

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
// const prompt = require("prompt-sync")();
// let teatype;
// let teaCollection = [];

// do {
// teatype = prompt("Enter your favorite tea types and use stop when the list finish to exit: ")
// if(teatype!='stop')
//     teaCollection.push(teatype);
// } while (teatype != "stop")

// console.log(teaCollection);

// write a do while loop that adds numbers from 1 to 3and stores the result in a variable named 'total'

// let i = 1;
// let limit = 3;
// let sum = 0;
// do {
//     sum += i;
//     i++

// }while(i<=limit)

// console.log(sum);

//////////////////////////////////////////////////// For/in ////////////////////////////////////////////
//Use a 'for-in' loop to loop  through an object containing city populations. stop the loop when the population of 'Berlin' is found and store all previous cities populations in a new object named 'cityPopulations'.

// let citiesPopulation = {
//     'London': 8900000,
//     'New York': 8400000,
//     'Paris': 2200000,
//     'Berlin':3500000
// };

// let cityPopulations = {};

// for (let city in citiesPopulation) {
//     if (city === 'Berlin') {
//         break;
//     }

//     cityPopulations[city]=citiesPopulation[city];

// }
// console.log(cityPopulations);

//Only make new object with largest city fromthe below city object
// let worldCities = {
//     Sydney: 5000000,
//     Tokyo: 9000000,
//     Berlin: 3000000,
//     Paris:2200000
// };

// let largeCitites = {};

// for (let city in worldCities) {
//     if (worldCities[city] < 3500000) {
//         continue;
//     }
//     largeCitites[city] = worldCities[city]
// }

// console.log(largeCitites);

//////////////////////////////////////////////////// for/of ////////////////////////////////////////////

//Use a for-of loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found. Strore the numbers before '4' in an array named 'smallNumbers'.

// let arr = [1,2,3,4,5]
// let smallNumbers = [];

// for (let element of arr) {
//     if (element === 4) {
//         break;
//     }
//     smallNumbers.push(element)
// }

// console.log(smallNumbers);

//User a for-of loop to iterate through the array ['chai','green tea','herbal tea','black tea'] and skip 'herbal tea' store the other teas in an array named 'preferredTeas'

// let teas = ['chai', 'green tea', 'herbal tea', 'black tea'];
// let preferredTeas = [];

// for (let tea of teas) {
//     if (tea === 'herbal tea') {
//         continue;

//     }
//     preferredTeas.push(tea)

// }

// console.log(preferredTeas);

//////////////////////////////////////////////////// forEach ////////////////////////////////////////////
//make a new array witth all tea till chai (excluding) in a new array called 'availableTeas'
// const teas = ["Earl grey", "green tea", "chai", "oolong tea"];

// let availableTeas = [];
// teas.forEach((tea) => {
//   if (tea === "chai") {
//     return;
//   }
//   availableTeas.push(tea);
// });

// console.log(availableTeas);

//Write a 'forEach' loop that iterates through the array ["Berlin","Tokyo","Sydney","Paris"].
//skip "Sydney" and store th other cities in a new array named "traveledCities".

// const cities = ["Berlin", "Tokyo", "Sydney", "Paris"];

// const traveledCities = [];
// cities.forEach((city) => {  
//     if (city === 'Sydney') {
//         return;
//     }
//     traveledCities.push(city);
// });

// console.log(traveledCities);

/////////////////////////// Sample Problems//////////////////////////////
//write a for loop that iterates through the array [2,5,7,9]. skip the value '7' and multiply the rest by 2. Store the result in a new array named 'doubledNumbers'.

// const arr = [2, 5, 7, 9];

// const doubledNumbers = [];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 7) {
//         continue;
//     }
//     doubledNumbers.push(arr[i]*2)
// }

// console.log(doubledNumbers);


//Use a for-of loop to iterate through the arrayy "['chai','green tea','jasmin tea','herbal tree']". and stop when the length of the current tea name is greater than 10. store the teas iterated in a array  named 'shortTeas'.


let teas = ['chai', 'green tea', 'jasmin tea', 'herbal tree'];
let shortTeas = [];

for (const tea of teas) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea)

}

console.log(shortTeas);
