const person = {
    name : "Akhil",
    greet:  function(){
        return("Hello, I'm " + this.name);
    }
}

console.log(person.greet())

const greetFunction = person.greet

console.log(greetFunction())// this will return undefined as the context is missing when assigned to another variable.

//to get the this context we can use any function method (call, apply, bind)
console.log(greetFunction.call(person)) // or can provide any other object like below.
console.log(greetFunction.apply({
    name: "Akhil Balan A"}))

const boundFunction = greetFunction.bind(person)
console.log(boundFunction())
