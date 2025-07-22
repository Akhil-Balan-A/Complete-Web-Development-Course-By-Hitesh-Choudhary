////////////////////////////// ✅ Object Method #1 – Object.keys() ////////////////////////////
//🧪 Print all the key in a array.

// let user = {
//     name: "Akhil",
//     age: 30,
//     isLoggedIn:true
// };

// let keys = Object.keys(user);

// console.log(Array.isArray(keys));

// console.log(keys);


// 🧪count the keys of the below object.

// let car = {
//     brand: "Toyota",
//     model: 'Corolla',
//     year: {
//         month: 'january',
//         day: 'monday',
//         year: 2025
//     }
// };

// console.log(Object.keys(car).length);

//🧪 print as a list below object.

// let fruit = {
//     apple: 5,
//     banana: 2,
//     mango:3
// }
// console.log(fruit.apple);


// Object.keys(fruit).forEach((key) => {

//     console.log(`${key}→${fruit[key]}`);

// });


////////////////////////////// ✅ Object Method #2 – Object.values() ////////////////////////////

//🧪 print the values in array.
// let user = {
//     name: "Akhil",
//     age: 30,
//     isLoggedIn:true
// };

// let values = Object.values(user);

// console.log(values);

//🧪 check if a user admin or not.


// let user = {
//     role: "admin",
//     email: "user@example.com",
//     active:false
// }

// let isAdmin = Object.values(user).includes("admin")

// console.log(isAdmin);


////////////////////////////// ✅ Object Method #3 – Object.entries() ////////////////////////////

// let user = {
//     name: "Akhil",
//     age: 30,
//     active:true
// };

// let entries = Object.entries(user);
// console.log(entries);

//////////////////////🧪 Practice Problem A – Convert Object to Array of Strings///////////////////////////////

// let product = {
//     brand: "Apple",
//     model: "iphone",
//     price:999
// };

// let result = Object.entries(product).map(([key, value]) => {
//    return `${key}:${value}`;
// })
// console.log(result);
//////////////// 🧪 Practice Problem B – Loop Over Entries with Destructuring //////////////

// let fruit = {
//     banana: 12,
//     mango: 5,
//     apple:8
// };

// let result = Object.entries(fruit);
// console.log(result);


// for (let [key, value] of Object.entries(fruit)) {
    
//     console.log(`${key} => ${value}`);
    

// }

//////////////// ✅ Object Method #4 – Object.assign() //////////////

// let obj1 = { name: "Akhil", age: 30 };
// let obj2 = { age: 35, role: 'dev' };

// let newObj = Object.assign({}, obj1, obj2);

// console.log(newObj);

//////////////// 🧪 Practice Problem A – Clone an Object //////////////

// let original = { x: 10, y: 20 };
// let copy = Object.assign({}, original);

// copy.x = 99;

// console.log(original);
// console.log(copy);

//////////////// 🧪 Practice Problem B – Combine Default and User Settings //////////////

// let defaultSettings = {
//     theme: "light",
//     notifications: true
// };

// let userSettings = {
//     theme: 'dark'
// };

// let finalSettings = Object.assign({}, defaultSettings, userSettings);

// console.log(finalSettings);

//////////////// ✅ Object Method #5 – Object.freeze() //////////////

// let settings = {
//     theme: "dark",
//     version: 1
// };

// Object.freeze(settings);
// settings.theme = "light";
// settings.newFeature = true;

// console.log(settings);

//////////////// 🧪 Practice Problem A – Test Freeze //////////////
// let car = { brand: "Toyota", speed: 100 };
// Object.freeze(car);

// car.speed = 200;
// car.model = 'Corolla';
// console.log(car);// { brand: "Toyota", speed: 100 }



//////////////// 🧪 Practice Problem B – Check if Frozen
  //////////////

// let user = { name: "Akhil" };
// Object.freeze(user);

// console.log(Object.isFrozen(user));

//////////////// ✅ Object Method #6 – Object.seal()
 //////////////

// let person = {
//     name: "Akhil",
//     age:30
// };
 
// Object.seal(person);

// person.age = 31;
// person.city = "Kochi";
// delete person.name;

// console.log(person);


//////////////// ✅ Object Method #7 – Object.hasOwnProperty()
 //////////////

let user = {
    name: "Akhil",
    age: 30
};

console.log(user.hasOwnProperty('name'))
console.log(user.hasOwnProperty('email'));

