function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, I'm " + this.name);
};

const person1 = new Person("Akhil");
console.log(person1);
person1.greet();