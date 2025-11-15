//--> Write a 'for' loop that loops through the array '["green tea","black tea","chai","oolong tea"]' and stops the loop when it finds "chai".
//store all teas before "chai" in a new array named "selectedTeas".

const teas = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTeas = [];
for (let i = 0; i < teas.length; i++){
    if (teas[i] === "chai") {
        break;
    }
    selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

//--> Write a 'for' loop that loops through the array '["longon","New York","Paris","Berlin"]' and skips "Paris"
//store the other cities in a new array named "visitedCities"

const cities = ["london", "New York", "Paris", "Berlin"];
const visitedCities = [];

for (let i = 0; i < cities.length; i++){
    if (cities[i] === "Paris") {
        continue;
    }
    visitedCities.push(cities[i]);

}

console.log(visitedCities);

//--> Use a for-of loop to iterate through the array '[1,2,3,4,5]' and stop when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'.

const arr = [1, 2, 3, 4, 5];

for (const nums of arr) {
    console.log(nums)
}

//--> Use a "for-of" loop to iterate through the array '["chai","green tea","herbal tea", "black tea"]' and skip "herbal tea".
//store the other teas in an array named "preferredTeas".
const teaList = ["chai", "green tea", "herbal tea", "black tea"];
const preferredTeas = [];
for (const tea of teaList) {
    if (tea === "herbal tea") {
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);

//--> Use a "for-in" loop to loop through an object containing city populations. stop the loop when the population of "Berlin" is found and store all previous cities populations in a new object named 'cityPopulations'.

let citiesPopulation = {
    "London": 10000000,
    "New York": 20000000,
    "Paris": 30000000,
    "Berlin": 40000000,
    "Tokyo": 50000000
}

const citiesPopulations = {};

for (const cityKey in citiesPopulation) {
    if (cityKey === "Berlin") {
        break;
    }
    citiesPopulations[cityKey] = citiesPopulation[cityKey]
}

console.log(citiesPopulations);

//--> Use a 'for in' loop to loop through an object containing city populations. skip any city with a population less than 3000000 and store the other cities in a new object named 'largeCities'.

citiesPopulation = {
    "London": 10000000,
    "New York": 20000000,
    "Paris": 30000000,
    "Berlin": 40000000,
    "Tokyo": 50000000
}
const largeCities = {};

for (const city in citiesPopulation) {
    if (citiesPopulation[city] < 30000000) {
        continue;
    }
    largeCities[city]=citiesPopulation[city];
}

console.log("The large cities are", largeCities);

//-->write a 'forEach' loop that iterates through the array "["earl grey","green tea", "chai", "oolong tea"]". stop the loop when "chai" is found and store all previous tea types in an array named "availableTeas".


const chaiTypes = ["earl grey", "green tea", "chai", "oolong tea"];
const availableChais = [];
chaiTypes.forEach((chai) => {
    if (chai !== "chai") {
    availableChais.push(chai)
    }
});

console.log(availableChais); 

//--> Write a 'forEach' loop that iterates through the array "["Berlin","Tokyo","Sydney","Paris"]". Skip "Sydney" and store the other cities in a new array named 'traveledCities'

const city = ["Berlin", "Tokyo", "Sydney", "Paris"];
const traveldCities = [];
 
city.forEach((city) => {
    if (city !== "Sydney") {
        traveldCities.push(city);
    }
})

console.log(traveldCities);

//--> Write a 'for' loop that iterates through the array '[2,5,7,9]'.
// skip the  the value 7 and multiply the rest by 2. store the result in a new array named 'doubledNumbers'
const nums = [2, 5, 7, 9];
const doubledNumbers = [];
nums.forEach(num => {
    if (num !== 7) {
        doubledNumbers.push(num*2)
    }
})

console.log('Doubled Numbers', doubledNumbers);

//--> Use a 'for-of' loop to iterate through the array ["chai","green tea","black tea","jasmin tea", "herbal tea"].
//and stop when the length of the current tea name is greater than 9. store the teas iterated over in an array named 'shortTeas'.

const teaArray = ["chai","green tea","black tea","jasmin tea", "herbal tea"];
const shortTeas = []

for (const tea of teaArray) {
    if (tea.length > 9) {
        break;
    }
    shortTeas.push(tea)
}

console.log("Short Teas:",shortTeas);

/////////////////////////////////////////////////////////////////////////////////////////////
//--> can the non-iteratable objects can be used with Object.keys() method?. if so, how?
function calculate(a,b) {}
calculate.add = function (a,b) {
    return a + b;
}
calculate.multiply = function (a,b) {
    return a * b;
}
calculate.subtract = function (a,b) {
    return a - b;
}
calculate.divide = function (a,b) {
    return a / b;
}


const result = calculate.add(10, 20);

console.log(result)
console.log(Object.keys(calculate))

const Null = Object.create(null)

console.log(typeof Null);
Null.name = "Akhil";
Null.age = 20;

console.log(Object.keys(Null));

////////////////////////////////---Rough works---////////////////////////////

//-->Object need to be called on the same key or in case of saved variable use []
const obj = {
    name: "Akhil",
    age: 20,
    city: "New York"
}
const objName = "name"

console.log(obj.name);
console.log(obj[objName])





