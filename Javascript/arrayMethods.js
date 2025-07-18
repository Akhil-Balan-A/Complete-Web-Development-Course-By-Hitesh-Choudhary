/////////////// Array Method #1 – push()//////////////////

// let cities = ['Paris', 'Tokyo'];

// let length1 = cities.push('Berlin')

// console.log(length1);

// let length2 = cities.push('Rome', 'Sydney');

// console.log(length2);

// console.log(cities);


//////////////////// Array Method #2 – pop()/////////////////////

// let colors = ['red', 'blue', 'green'];

// let lastColor = colors.pop();


// console.log(lastColor);
// console.log(colors);

//////////////////////////// Array Method #3 - shift()///////////////////////

// let numbers = [100, 200, 300];

// let first = numbers.shift();

// console.log(first);
// console.log(numbers);

////////////////////////////////// Array Method #4 - unshift()    //////////////////////////////////////

// let colors = ["blue", "green"];
// let length = colors.unshift('red');

// console.log(length);
// console.log(colors);

////////////////////////////////// Array Method #5 - concat()    //////////////////////////////////////

// let fruits = ['apples', 'banana'];
// let vegetables = ['carrot', 'tomoto'];

// let result = fruits.concat(vegetables);

// console.log(result);
// console.log(fruits);
// console.log(vegetables);

////////////////////////////////// Array Method #6 - join() //////////////////////////////////////
//user to join the elements of the array into a single string.

// let fruits = ['apples', 'banana', 'mango'];

// let result = fruits.join();

// console.log(result);
// console.log(fruits);

////////////////////////////////// Array Method #7 - slice()  //////////////////////////////////////

// let citites = ['Delhi', 'Mumbai', "Kolkata", 'Chennai'];

// let metroCities = citites.slice();
// let metroCitiesSelected = citites.slice(0,3);

// console.log(metroCities); //make full shallow copy
// console.log(metroCitiesSelected);

////////////////////////////////// Array Method #8 - splice() //////////////////////////////////////

// let colors = ['red', 'green', 'blue', 'yellow'];

// let removed = colors.splice(1,1);

// console.log(removed);

// console.log(colors);

//////////////////////////////////Array Method #9 - indexOf()//////////////////////////////////////

// let colors = ['red', 'green', 'blue', 'green'];
// let target  = 'green';

// // Optional helper to capitalize the first letter
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// const possibilities = [
//   target,
//   target.toLowerCase(),
//   target.toUpperCase(),
//   capitalize(target)
// ];

// // Find the first match, ignoring case differences
// let foundIndex = -1;
// for (const variant of possibilities) {
//   const idx = colors.indexOf(variant);
//   if (idx >= 0) {
//     foundIndex = idx;
//     break;           // stop at the first match
//   }
// }

// if (foundIndex >= 0) {
//   console.log(`Found at index ${foundIndex}`);
// } else {
//   console.log('Not found');
// }

//////////////////////////////////Array Method #11 - includes() //////////////////////////////////////

// let cities = ['Delhi', "Mumbai", 'Chennai'];

// console.log(cities.includes('Delhi'));

////////////////////////////////// Array Method #12 - some()//////////////////////////////////////

let numbers = [1, 3, 5, 7];

let hasEven = numbers.some((num) => {
    num%2===0
})
console.log(hasEven);


