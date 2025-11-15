//-->simple function with object.
function message() {
    console.log("Hello, I'm " + this.name);
}

const person1 = {
    name: "Akhil",
    greet: message
};

person1.greet();

const person2 = {
    name: "Aditya",
    greet: message
};

person2.greet();

//-->Constructor function.
// is a function that is used to create objects. it is a special function that is used to create objects. later classes are introduces and used to create objects.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar1 = new Car("Ford", "Mustang");
console.log(myCar1);

let myCar2 = new Car("Honda", "Civic");
console.log(myCar2);    

 
function Tea(type) {
    this.type = type;
    this.description = function () {
        console.log("This is a " + this.type + " tea");
    }
}

let lemonTea = new Tea("Lemon");
console.log(lemonTea);
lemonTea.description();

function Animal(species,speciality) {
    this.species = species;
    this.speciality = speciality;
    this.makeNoise = function () {
        console.log("The " + this.species + " makes a noise");
    }
}

Animal.prototype.ebility = "can fly";
Animal.prototype.specialFeature = function () {
    console.log("The " + this.species + " is a " + this.speciality);
}

let parrot = new Animal("parrot","can talk");
console.log(parrot);
parrot.makeNoise();
parrot.specialFeature();
parrot.ebility

function Drink(name, price) {
    if(!new.target) {
        throw new Error ("Drink must be created using the new keyword");
    }
    this.name = name;
    this.price = price;
}

let coffee = Drink("Coffee", 10);
console.log(coffee);











