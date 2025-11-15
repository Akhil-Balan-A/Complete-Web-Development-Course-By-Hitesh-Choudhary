//-->lexical scoping -A structure that stores variables, functions, and the references to outer environments — based on where code is written (not where it is executed).

let name = "Global";

function greet() {
  console.log(name);
}

function run() {
  let name = "Local";
  greet(); // What prints?
}

run();

//-->Closure - function that has access to the variables and parameters of outer functions, even after the outer function has finished executing.

function outer(num) {
    let counter = 4;
    return function () {
        counter++;
        console.log(counter+num);
    }
}

outer(10)();
