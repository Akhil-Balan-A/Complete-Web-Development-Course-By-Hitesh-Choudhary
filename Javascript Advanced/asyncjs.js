//Synchronous code

console.log('Task One');
console.log('Task Two');
console.log('Task Three');

// Asynchronous code

console.log('Task One');

setTimeout(() => {
    console.log('Task Two');
}, 2000);

console.log('Task Three');


//closure.

function outerFunction() {
    let counter = 0;
    return function innerFunction() {
        counter++;
        console.log(counter);
        
    }
}

let increment = outerFunction();
increment();//1
increment();//2
increment();//3
increment();//4

