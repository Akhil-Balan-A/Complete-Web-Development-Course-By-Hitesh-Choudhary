//ordinary object

let car = {
    make: 'Toyota',
    model: 'camry',
    year: 1982,
    start: function () {
        return `${this.make} started production of the model ${this.model} in ${this.year}`
    }
}

console.log(car)
console.log(car.start()); 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john)

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} can make a sound`;
}

const dog = new Animal("Dog");
console.log(dog);

console.log(dog.speak());


Array.prototype.doubledArray = function () {
    return this.map((nums) => {
        return nums*nums;
    })
}
let myArray = [1, 2, 3];
console.log(myArray.doubledArray());


//--> classes

class Vehicle{
   #Brand = "BMW";
    constructor(founder) {
        this.founder = founder;
        this.greet = () => {
            console.log(`Thank you ${this.founder} for creating a marvelous vehicle. ${this.#Brand} is always the driver's car`);
        }
    }
    
    history() {
        return `${this.#Brand} is founded by ${this.founder} and is the best car in the world.`
    }

    getters(){
    return this.#Brand;
    }
}


const BMW = new Vehicle("Akhil");
const history = BMW.history();
console.log(history)
console.log(BMW.getters());
console.log(BMW)
//console.log(BMW.#Brand) privateFields cannot acessible outside class.

//--> Inheritance - extending a class (Sharing the same properties and methods)
class RollsRoyce extends Vehicle {

    constructor(model, year,founder) {
        super(founder);//if we dont share founder detais, for RollsRoyce class the founder will be undefined since it is inherited from vehicle. even if not share also okay
        this.model = model;
        this.year = year
    }

    info() {
        console.log(`Rolls Roys ${this.model} year ${this.year} has more than 50% parts are shared from ${this.getters()}`);
    }

}

const phantom = new RollsRoyce('phantom beast', 2026,"Akhil Balan");
console.log(phantom);
console.log(phantom.info());

//--> ENCAPSULATION - Hiding the implementation details

class BankAccount{
    #balance = 0;
    constructor(initialDeposit) {
        this.#balance += initialDeposit;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }

}

const myAccount = new BankAccount(10000000000);
console.log(myAccount);
myAccount.deposit(100000)
const balance = myAccount.getBalance();
console.log(balance);


//--> ABSTRACTION - Hiding the complexity

class CoffeeMachine{
    #waterLevel = 100; //private Fields
    #beans = 50; //private field
    #grindBeans() {
        console.log("Grinding beans... ")
        this.#beans -= 10;
    }
    #heatWater() {
        console.log("Heating Water...");
        this.#waterLevel -= 20;
    }
    #brewCoffee(type) {
        console.log(`Brewing ${type}`)
    }
    constructor() {
        console.log("☕ Coffee Machine is ready!")
    }
  // public method (interface) - visible to user
    makeCoffee(type) {
        console.log(`Making yor ${type}`)
        this.#grindBeans();
        this.#heatWater();
        this.#brewCoffee(type);
        console.log(`${type} is ready! Enjoy ☕\n`)

    }
}

const machine = new CoffeeMachine();
machine.makeCoffee("cappuccino");
machine.makeCoffee("espresso")

/*
☕ Coffee Machine is ready!
Making your Espresso...
Grinding beans...
Heating water...
Brewing Espresso...
Espresso is ready! Enjoy ☕  

the user onlysee messages on disply like above nothing else known by user
*/

//--> POLYMORPHISM - Multiple forms
 
class Bird{
    fly(){
        return 'flying...'
    }
}

class Penguin extends Bird{
    fly() {
        return "Penguins can't fly"
    }
}

const bird = new Bird();
const penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//-->Static Methods and Properties - can be acessed only by class itself.

class Calculator{
    static PI = 3.14;
    static add(a,b) {
        return a + b;
    }

}

console.log(Calculator.add(2, 3))
console.log(Calculator.PI)



//-- private field(#)vs private filed like indication(_)


class Human{
    #fullName = "Akhil Balan A"
    constructor(name) {
        this._name = name; // underscore indicates "protected/private-like" field for dev reference. actually it is just like any property.
    }

}

const Akhil = new Human("Akhil");
console.log(Akhil._name);
// console.log(Akhil.#fullName);//won't work since proper private field need special method to access it.




//--Getters and Setters - Getters and Setters are special methods that allow controlled access to object properties.(part of Encapsulation -hide intrnal data)

class Employe{
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }
    get salary() {
        return this._salary
    }
    set salary(salary) {
        if (salary < 0) {
            console.log("salary can't be negative")
        } else {
            this._salary = salary;
            
        }
    }
}

let emp1 = new Employe("Alice", 50000);
emp1.salary = -100000 // calling setter
console.log(emp1.salary); //calling getter
console.log(emp1._salary); //calling the property itself.

class Test{
    constructor(argument) {
        this.argument = argument
    }
}





