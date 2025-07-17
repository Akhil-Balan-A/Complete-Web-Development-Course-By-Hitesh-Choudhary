// let username = {
//     firstname: "akhil",
//     isLoggedin: true
// };

// console.log(username);


// console.log( typeof username);


// console.log(username.isLoggedin);

// delete username.firstname
// console.log(username["firstname"]);



// let student = {
//     'first name': 'Akhil',
//     lastName : 'Balan',
// }

// console.log(student)
// console.log(student.lastName)
// console.log(student["first name"]);

// let today = new Date();
// console.log(today.getDate(),today.getMonth(),today.getFullYear());


//Array

// let heros = ['superman', 'spiderman', 'ironman', 1, true, undefined, null, { name: 'akhil' }, [1, 2, 3], function () {
//     console.log('Hello from inside array');
    
// }]

// console.log(heros);
// heros[9]();

// let check = 1 +  "1"
// console.log( typeof check);

// let value = true;

// let result = value + 1;
// console.log(result);
// console.log(typeof result);


// let value = '2'

// console.log(value);// will print string number 2

// console.log(Number(value));// will print in number form since we use number function.

// let value2 = "2ab"

// console.log(value2);// will print the string

// console.log(Number(value2));//NaN as it is not able to convert.

// //lets check what is NaN's type

// console.log(typeof NaN);// Not a number is a number.ha ha very very strange.. this is why javascript make me confused..



// let teaFlavors = ["green tea", "black tea", "oolong tea"];

// console.log(teaFlavors[0]);

// let citites = ['london', 'tokyo', 'paris', 'sydney', 'newyork'];

// let favCity = citites[2];
// console.log(citites[2])

// let teaTypes = ['herbal tea', 'white tea', 'masala tea'];

// teaTypes[1]='jasmine tea'
// console.log(teaTypes);

// let cityVisited = ['mumbai', 'sydney'];

// cityVisited.push('berlin');

// console.log(cityVisited);

////////////////remove last element of an array/////////////////
// let teaOrders = ['chai', 'iced tea', 'matcha', 'earlgrey'];

// teaOrders.pop();

// console.log(teaOrders);

/////////////// Primitive type data type is copied by value unline reference in objects.//////////////////////////


// let var1 = 5;
// let var2 = var1;
// var1 = 9;
// console.log(var1); //5 will get printed
// console.log(var2); //9 will get printed

/////////////// copy of the array//////////////////////////

// let popularTeas = ['green tea', 'oolong tea', 'chai'];

// let softCopyTeas = popularTeas;

// softCopyTeas.pop();

// console.log(popularTeas)
// console.log(softCopyTeas);


////////////////// hard copy without reference. //////////////

let topCities = ['berlin', 'singapore', 'new york'];
let hardCopyCities = [...topCities];

topCities.pop();
console.log(topCities);
console.log(hardCopyCities);


















