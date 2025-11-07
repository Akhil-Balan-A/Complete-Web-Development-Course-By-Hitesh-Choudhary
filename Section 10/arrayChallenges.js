// Declare an array and store the first item in a variable.
let teas = ["Black", "Green", "White", "Oolong"];

let firstTea = teas[0];
console.log(firstTea);

// Declare an array named cities and store the third item in a variable.
let cities = ["New York", "London", "Paris", "Tokyo"];      


let thirdCity = cities[2];
console.log(thirdCity); 

// You have an array named tea with types of teas in it. change the second element of the array to "Jasmin Tea"

const teaTypes = ["Black", "Green", "White", "Oolong"];

teaTypes[1]="Jasmin Tea"

console.log(teaTypes);

// Declare an array named "citiesVisited" and add "Berlin" to the array using push method.

const citiesVisited = ["New York", "London", "Paris", "Tokyo"];

citiesVisited.push('Berlin');
console.log(citiesVisited);


// you have an array named 'teaOrders' with some tea types in it..remove the last element of the array using the pop method and store it in a variable named "lastOrder"

const teaOrders = ["Black", "Green", "White", "Oolong"];

const lastOrder = teaOrders.pop();
console.log(lastOrder);

// you have an array named 'popular teas' containing  some tea types. create a soft copy of this array namd 'softCopyteas'.

const popularTeas = ["Black", "Green", "White", "Oolong",{name:"cinemon tea"}];

const softCopyTeas = popularTeas
const hardCopyTeas = structuredClone(popularTeas) //create a hard copy of the array using the structuredClone method
const softCopyTeas2 = [...popularTeas] // spread operator also create a soft copy 
softCopyTeas2[4].name = "chinese Tea" // changing the nested object
popularTeas.push("Jasmin Tea"); // adding a new element to the original array
console.log("Original",popularTeas)
console.log("Soft Copy", softCopyTeas)
console.log("Soft Copy - 2",softCopyTeas2)
console.log("Hard Copy", hardCopyTeas)

 
// You have an array named "topCities" containing some cities. create a hard copy of it.

const topCities = ["New York", "London", "Paris", "Tokyo", {name:"Berlin"}];
const hardCopyCities1 = [...topCities]; //Method1: still nested object shares the same reference so it is not a hard copy.
const hardCopyCities2 = JSON.parse(JSON.stringify(topCities)); //Method2: JSON.stringify() converts the object into a string and JSON.parse() converts the string back into an object.
const hardCopyCities3 = structuredClone(topCities); //Method3: structuredClone() creates a deep copy of the array.
const hardCopyCities4 = topCities.slice(); //Method4: still nested object shares the same reference so it is not a hard copy.

hardCopyCities4[4].name = "Munich"
console.log(topCities);
console.log(hardCopyCities1);
console.log(hardCopyCities2);
console.log(hardCopyCities3);
console.log(hardCopyCities4);

// You have two arrays: europeanCities and asianCities. create a new array named "allCities" by merging the two arrays using the concat method.

const europeanCities = ["London", "Paris", "Berlin"];
const asianCities = ["Tokyo", "Seoul", "Beijing"];

const allCities1 = [...europeanCities, ...asianCities];//Method1 using spread operator
const allCities2 = europeanCities.concat(asianCities); //Method2 using concat method
console.log(allCities1); // this is not a hard copy nested objects share the same reference
console.log(allCities2); // this is not a hard copy nested objects share the same reference
const allCities3 = structuredClone([...europeanCities, ...asianCities]); //Method3 using structuredClone method will make hard copy.
const allCities4 = structuredClone(europeanCities.concat(asianCities)); //Method4 using structuredClone method will make hard copy.


// You have a array named teaMenu. find tthe length of the array and store it in a variable named menuLength.

const teaMenu = ["Black", "Green", "White", "Oolong"];
const menuLength = teaMenu.length;
console.log(menuLength);


// You have an array named "cityBucketList" containing some cities. check if the london is in the array and store the result in a variable named 'isLondoninList'.

const cityBucketList = ["New York", "London", "Paris", "Tokyo"];
const isLondoninList = cityBucketList.includes("London");
console.log(isLondoninList);

