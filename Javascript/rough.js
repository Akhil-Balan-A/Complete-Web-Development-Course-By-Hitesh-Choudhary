//Educational Institution
/*
Scenario:
You are designing a system for managing people in an education system.
There are Students, Teachers, and Admins.
*/

// class Person{
//     constructor(name,age,email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
//     introduce() {
//         return `Hi, I'm ${this.name}, ${this.age} years old. You can reach me at ${this.email}`;
//     }
// }

// class Students extends Person{
//     constructor(name,age,email,grade) {
//         super(name, age, email);
//         this.grade = grade;
//     }
//     study() {
//         return `${this.name} studying in grade ${this.grade}`
//     }
// }

// class Teachers extends Person{
//     constructor(name, age, email,subject) {
//         super(name, age, email);
//         this.subject = subject;
//     }
//     teach() {
//         return `${this.name} teaches ${this.subject}`;
//     }
// }

// class Admin extends Person{
//     constructor(name, age, email,role) {
//         super(name, age, email)
//         this.role = role;
        
//     }
//     manage() {
//         return `${this.name} manages ${this.role}`
//     }

// }

// const student1 = new Students('Akhil', 20, 'Akhilbalan121@hotmail.com',5);
// console.log(student1);
// console.log(student1.study());
// console.log(student1.introduce());

// const teacher1 = new Teachers("Thara", 30, 'Thara@gmail.com', 'Maths');
// console.log(teacher1);
// console.log(teacher1.teach());
// console.log(teacher1.introduce());

// const manager1 = new Admin("Balan", 35, 'Balan121@gmail.com', 'HR Department');
// console.log(manager1);
// console.log(manager1.manage());
// console.log(manager1.introduce());

/*
🚗 Problem 2: Vehicle Hierarchy
Scenario:
You are modeling different types of vehicles in a dealership app.

Base Class: Vehicle
Common Properties: make, model, year
Child Classes: Car, Bike, Truck

✅ Task:

Use super(...) in each subclass to pass common vehicle details.

Each subclass should have a unique method (e.g., Car.driveFast(), Truck.loadCargo())
*/



class vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;   
    }
    getInfo() {
        return `This is a ${this.year} ${this.make} ${this.model}`
    }
}

class Car extends vehicle{
    constructor(make,model,year,fuelType) {
        super(make, model, year);
        this.fuelType = fuelType;
    }
    drive() {
        return `Driving the car with ${this.fuelType} engine`
    }

}
class Bike extends vehicle{
    constructor(make,model,year,engineCC) {
        super(make, model, year);
        this.engineCC = engineCC;
    }
    wheelie() {
        return `Doing a wheelie with ${this.engineCC} bike`;
    };
}

class Truck extends vehicle{
    constructor(make, model, year,loadCapacity) {
        super(make, model, year);
        this.loadCapacity = tloadCapacity;
    }
    haul() {
        return `Hauling up to ${this.loadCapacity}`;
    }
}

const car1 = new Car('Honda', 'City', 2020, 'Petrol');
console.log(car1);
console.log(car1.drive());
console.log(car1.getInfo());








