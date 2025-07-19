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

// let numbers = [1, 3, 5, 7];

// let hasEven = numbers.some((num) => {
//     num%2===0
// })
// console.log(hasEven);


////////////////////////////////// Array Method #13 - every() //////////////////////////////////////

// let products = [
//   { name: "Monitor", price: 250 },
//   { name: "Keyboard", price: 100 },
//   { name: "Mouse", price: 50 }
// ];

// //chekc all the product price is under or equal to 300rs.

// let result = products.every(product => (product.price) <= 300);

// console.log(result);

////////////////////////////////// Array Method #14 - find()//////////////////////////////////////


// let products = [
//   { name: "Pen", stock: 0 },
//   { name: "Notebook", stock: 0 },
//   { name: "Pencil", stock: 5 }
// ];


// //find first available product fromt the stock.


// let result = products.find(product => product.stock > 0);

// console.log(result.name);


////////////////////////////////// Array Method #15 - findIndex()//////////////////////////////////////

// let numbers = [10, 20, 30, 40];
// //find the first element that satisfy the codition of number greater than 24 of its index.

// let result = numbers.findIndex(num => num >= 25);
// console.log(result);

////////////////////////////////// Array Method #16 - filter()//////////////////////////////////////

// let numbers = [10, 25, 30, 15, 40];

// //fromthe above array filter number above 20.

// let newArry = numbers.filter((num) => {
    //     return num>20
    // });
    
    // console.log(newArry);
    

////////////////////////////////// Array Method #17 - map()//////////////////////////////////////

// let numbers = [1, 2, 3, 4, 5];

// //make new array of squres of the above array elements

// let doubled = numbers.map(num => num * num);
// console.log(doubled);

// let products = [
    //   { name: "Monitor", price: 300 },
    //   { name: "Mouse", price: 100 },
    //   { name: "Keyboard", price: 200 }
    // ];
    
    // let productNames = products.map(product => product.name);
    
    // console.log(productNames);
    
////////////////////////////////// Array Method #18 - reduce()//////////////////////////////////////

// let numbers = [10, 20, 30];

// //find sum of the array.

// let sum = numbers.reduce((acc, curr) => acc + curr);

// console.log(sum);

// let products = [
    //   { name: "Pen", price: 10 },
    //   { name: "Book", price: 50 },
    //   { name: "Bag", price: 100 }
    // ];
    
    // //find sum of total items.
    
    // let total = products.reduce((acc, product) => {
        //    return acc + product.price
// },0);

// console.log(total);


////////////////////////////////// Array Method #19 - sort()//////////////////////////////////////

// let fruits = ["banana", "apple", "mango"];

// fruits.sort();

// console.log(fruits);

// let prices = [250, 100, 400, 50];
// //sort in ascending order.

// let copyPrices = prices.slice();

// copyPrices.sort((a, b) => a - b);

// console.log(copyPrices);
// console.log(prices);


////////////////////////////////// Array Method #20 - reverse()//////////////////////////////////////

// let letters = ["a", "b", "c", "d"];

// letters.reverse();
// console.log(letters);

////////////////////////////////// Array Method #21 - flat()//////////////////////////////////////

// let arr = [1, 2, [3, 4]];

// let newArray = arr.flat();

// console.log(newArray);


// let arr =  [1, [2, [3, [4, [5]]]]];
// let newArray = arr.flat(Infinity);

// console.log(newArray);


////////////////////////////////// Array Method #22 - fill()//////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];

// arr.fill(0);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];

// arr.fill(9, 1, 4);
// console.log(arr);

////////////////////////////////// Array Method #22 - Array.from()//////////////////////////////////////

// let str = 'Hello';

// let chars = Array.from(str);
// console.log(str);
// console.log(chars);


////////////////////////////////// Array Method #22 - forEach()//////////////////////////////////////

// let num = [1, 2, 3];

// num.forEach((num, i) => {
    //     console.log(`Index ${i}: ${num}`);
    
    // });
    
    // let products = [
        //   { name: "Pen", price: 10 },
        //   { name: "Notebook", price: 50 }
        // ];
        
        // products.forEach((products) => {
            //     console.log(products.name);
            
            // });
            

////////////////////////////////// Array Method #23 - Set()//////////////////////////////////////

// const myArray = [1, 2, 2, 3];

// console.log(myArray);

// const mySet = new Set([1, 2, 2, 3,4]);
// console.log(mySet);

// //convert my a array out of set.

// const newArray = Array.from(mySet)
// console.log(newArray);


