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

