function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}


let person1 = new Person('Akhil');
person1.age = 30;
console.log(person1);
person1.greet();
