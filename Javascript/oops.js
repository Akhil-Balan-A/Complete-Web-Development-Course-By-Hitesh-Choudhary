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

// class BankAccount{
//     bankName = "South India Bank"
//     #balance
//     constructor(accountHolder,initialDeposit) {
//         this.accountHolder = accountHolder;
//         this.#balance = initialDeposit;
//     }

//     getBalance() {
//         return `Available balance is ${this.#balance}`;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount
//             return `Deposited ₹${amount},${this.getBalance()}`
//         } else {
//             return 'Invalid depost amount'
//         }
//     }
//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//             return `Withdrew ₹${amount}, ${this.getBalance()}`;
//         }
//         return `Insuficient Balance`
//     }




// }

// const account = new BankAccount('Akhil', 5000);

// console.log(account);
// console.log(account.getBalance());
// console.log(account.deposit(2000));



// class PaymentProcesor{
//     makePayment(amount) {
//         //complex logic:bank ApI, card validation , etc.
//         throw new Error("This method must be overridden");
//     }
// }

// class CreditCardPayment extends PaymentProcesor{
//     makePayment(amount) {
//         //complex logi : UPI gateway, token verification
//         return `Paid ${amount} via card.`;
//     }
// }


// class UpiPayment extends PaymentProcesor{
//     makePayment(amount) {
//         return `Paid ₹${amount} via UPI.`;
//     }
// }

// const payment1 = new CreditCardPayment();
// console.log(payment1.makePayment(1500));

// const payment2 = new UpiPayment();
// console.log(payment2.makePayment(999));

// class ATM {
//     #storedData;
    
//     constructor(cardNumber, expiryDate, PIN) {
//         this.#storedData = {
//             cardNum: 123456789,
//             cardExpiryDate: '12/30',
//             balance: 10000,
//             storedPin: 1234
//         };
//         this.cardNumber = cardNumber;
//         this.expiryDate = expiryDate;
//         this.PIN = PIN;
//     }

//     authenticate(inputCardNumber, inputExpiryDate, inputPIN) {
//         if (
//             inputCardNumber === this.#storedData.cardNum &&
//             inputExpiryDate === this.#storedData.cardExpiryDate &&
//             inputPIN === this.#storedData.storedPin
//         ) {
//             return true;
//         }
//         return false;
//     }

//     showOptions() {
//         return ['1. Check Balance', '2. Deposit', '3. Withdraw'];
//     }

//     #logTransaction(type, amount) {
//         console.log(`Transaction: ${type}, Amount: ₹${amount}`);
//     }

//     getBalance() {
//         return `Available balance: ₹${this.#storedData.balance}`;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#storedData.balance += amount;
//             this.#logTransaction('Deposit', amount);
//             return this.getBalance();
//         }
//         return 'Invalid amount';
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#storedData.balance) {
//             this.#storedData.balance -= amount;
//             this.#logTransaction('Withdraw', amount);
//             return this.getBalance();
//         }
//         return 'Insufficient funds or invalid amount';
//     }
// }

// // ---------------------------
// // ✅ Simulation starts here

// const myATM = new ATM('123456789', '12/30', '1234');

// const enteredCard = 123456789;
// const enteredExpiry = '12/30';
// const enteredPIN = 1234;

// if (myATM.authenticate(enteredCard, enteredExpiry, enteredPIN)) {
//     console.log('✅ Authenticated!');
//     console.log(myATM.showOptions());

//     console.log(myATM.getBalance());
//     console.log(myATM.deposit(5000));
//     console.log(myATM.withdraw(2000));
// } else {
//     console.log('❌ Authentication failed. Please check your PIN or card details.');
// }

/* 
This is a good example of demonstrating core OOP concepts, particularly encapsulation and abstraction, using modern JavaScript syntax (private class fields with #).

Here's why it's good:

Clear Demonstration of Encapsulation: The use of #storedData and #logTransaction effectively showcases data hiding and how internal details are protected from external access. This is a crucial aspect of encapsulation.

Good Abstraction: The public methods (authenticate, showOptions, getBalance, deposit, withdraw) provide a clear and simple interface for interacting with the ATM, hiding the underlying complexity.

Relevant Example: An ATM is a familiar concept, making it easy to understand the real-world application of these OOP principles.

Simplicity: The code is concise and focuses directly on illustrating the concepts without adding unnecessary complexity.

Modern JavaScript: It utilizes recent JavaScript features (private class fields), which is a plus for demonstrating current best practices.

It's not overly complex, which is a strength for an example designed to teach fundamental concepts.
*/

//example 2 abstraction

// class CoffeMachine {
//     start() {
//         //call db
//         //filter value
//         return `Starting the machine...`;
//     }
//     brewCoffe() {
//         //complex calculation
//         return 'Brewing Coffe';
//     }
// }


// let myMachine = new CoffeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());


//Polymorphism.

// class Bird{
//     fly() {
//         return 'flying....'
//     }
// }

// class Penguin extends Bird{
//     fly() {
//         return `Penguins can't fly`;
//     }
// }

// let bird1 = new Bird();
// let penguin1 = new Penguin();

// console.log(bird1.fly());
// console.log(penguin1.fly());


//static method
class Validator {
  static isEmail(str) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  }
  static isPhone(str) {
    return /^[6-9]\d{9}$/.test(str);
  }
}

// console.log(Validator.isEmail("test@gmail.com")); // ✅ true
// console.log(Validator.isPhone("9876543210"));     // ✅ true


//getters and setters is it all about more control or part of encapsulation

// class User{
//     #name;
//     constructor(name) {
//         this.#name = name;
//     }

//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         if (newName.length > 0) {
//             this.#name = newName;
//         } else {
//             console.log("Name can't be empty");
            
//         }
//     }

// }

// let person1 = new User('akhil');




// console.log(person1.name);
// person1.name = "Balan"
// console.log(person1.name);


