// OOPS in JS
// Abstraction  - Hiding the implementation

// Polymorphism - Multiple forms
// Inheritance  - Reusability
// Encapsulation - Hiding the data

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `The ${this.make} ${this.model} is starting first introduced in ${this.year}...`;
    },

};

// console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;

};

let John = new Person("John Doe", 30);

// console.log(John);
// console.log(John.name);

//prototypal chaining

function Animal(type) {
    this.type = type;
};

Animal.prototype.speak = function () {
    return `${this.type} makes sound`;
}

Array.prototype.akhil = function () {
    return `Custom method ${this}`;
}

let myArray = [1, 2, 3];
// console.log(myArray.akhil());

let myNewArray = [1, 2, 3,4,5,6];
// console.log(myNewArray.akhil());

//classes in oops
class vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    info() {
        return `The ${this.make} ${this.model} first introduced in ${this.year}...`;
    }
}




class Car extends vehicle{
    drive() {
           return `${this.make}: this is an inhertiance example`;
       }
}

let myCar = new Car("Toyota", 'corolla',2020);
// console.log(myCar.info());
// console.log(myCar.drive());

let secondCar = new vehicle("Tata", "harier", 2025)
// console.log(secondCar.info());
// console.log(secondCar.drive()); //this wont  work as inheritance work only oneway where it iherits to.

/////////////// Base class: Volkswagen Group Platform//////////////////
class VolkswagenGroup{
    constructor(brand, model, platform, engine) {
        this.brand = brand;
        this.model = model;
        this.platform = platform;
        this.engine = engine;
    }
    createCar() {
        return `${this.brand} ${this.model} is built on the ${this.platform} and powered by a ${this.engine} engine!.`;
    }
}

//skoda subclass

class Skoda extends VolkswagenGroup{
    constructor(model) {
        // All Skoda cars here share the same platform and engine as VW
        super('Skoda',model,'MQB A0-IN', 'TSI turbo petrol')
    }
}

//Volswagon subclass
class Volkswagen extends VolkswagenGroup{
    constructor(model) {
        super('Volkswagen', model, 'MQB A0-IN', 'TSI turbo petrol')
    }
}

// Audi subclass
class Audi extends VolkswagenGroup {
    constructor(model) {
        super('Audi', model, 'MLB Evo', 'TFSI / TDI engines');
    }
}

const vwCar = new Volkswagen('Taigun');
// console.log(vwCar);
// console.log(vwCar.createCar());

const skodaCar = new Skoda('Kusha1');
// console.log(skodaCar);
// console.log(skodaCar.createCar());


// class Parent{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         console.log('👴 Parent constructor called');
        
//     }
// }

// class Child extends Parent{
//     constructor(name, age, school) {
//         super(name, age)//calling parent's constructor
//         this.school = school;
//         console.log("🧒 Child constructor called");
        
//     }
// }

// const kid = new Child("Akhil", 20, 'Greenwood High');
// console.log(kid);

// Encapsulation


class BankAccount{
    bankName = 'South Indian Bank' // public property
    #balance;// private property must be declared with let or const or var with #front (as per 2022 Es5change)
    constructor(accountHolder,initialDeposit) {
        this.accountHolder = accountHolder;
        this.#balance = initialDeposit;
    }
    getBalance() {
        return `Available balance is ${this.#balance}`;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `deposited $ ${amount}.${this.getBalance()}`;
        }
        return 'Invalid deposit amount'
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount
            return `Withdrew $ ${amount}. ${this.getBalance()}`;
        }
        return 'Insuficient Balance.'
    }
}


const myAccount = new BankAccount('Akhil', 5000);
console.log(myAccount.getBalance());
console.log(myAccount.deposit(2000));
console.log(myAccount.withdraw(1500));
console.log(myAccount.withdraw(6000));
console.log(myAccount.#balance);// wont work as try to access private property
console.log(myAccount.bankName);// public property accessible



