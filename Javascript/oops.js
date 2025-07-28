// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }


// const person1 = new Person('Akhil', 30);
// console.log(person1);


// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// const car1 = new Car('Toyota', 'Corolla', 2022);
// console.log(car1);

// const car2 = new Car('Tata','Safari', 2023);
// console.log(car2);


// function Tea(name,price) {
//     this.name = name;
//     this.price = price
//     this.describe = function () {
//         return `This is a cup of ${this.name}`
//     }
// }

// const tea1 = new Tea('green tea', 20);
// console.log(tea1);
// console.log(tea1.describe());


// function Animal(species, color) {
//     this.color = color;
//     this.species = species
//     this.describe = function () {
//         return `${this.species} is the largest animal in land`
//     }
// };


// Animal.prototype.sound = function () {
    
//     return `${this.species} makes sound`
// }

// const Elephant = new Animal('Elephantidae','black')

// console.log(Elephant);
// console.log(Elephant.describe());
// console.log(Elephant.sound());


function Drink(name) {
    // if(!new.target) {
    //     throw new Error('use new keyword');
    // }
    this.name = name
}

const tea1 = new Drink('green tea');
console.log(tea1);



