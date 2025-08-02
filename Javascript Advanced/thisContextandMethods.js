// this context
const person = {
    name: "Akhil",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet(); 
// ✅ Works correctly because 'this' refers to 'person'

const functionGreetTest1 = person.greet; 
// ❌ When called directly (functionGreetTest1()), 'this' becomes undefined 
// because it is no longer attached to the 'person' object

const functionGreetTest2 = person.greet.bind(person); 
// ✅ bind() creates a new function with 'this' permanently set to 'person'

functionGreetTest2(); 
// ✅ Outputs: "Hi, I am Akhil"


// call,apply, bind - functin methods (All three let you manually control the this context when invoking a function.


