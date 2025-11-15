//--> Generator function

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();//Each generator object has seperate memory
const gen2 = numberGenerator();// Each generator object has seperate memory


console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

//--> 
