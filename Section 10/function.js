//--> write a function named 'makeTea' that takes one parameter , 'typeOfTea', and returns a string like "making green tea" when called with "green tea". store the result in a variable named 'teaOrder'

function makeTea(typeOfTea) {
  return "Making green tea";
}

let result = makeTea("green tea");

console.log(result);

//--> create a functon named 'orderTea' that takes one parameter, 'teaType'. inside this function, create another function named 'confirmOrder' that returns a message like "Order Confirmed for Chai". Call "confirmOrder" from within 'orderTea' and return the result.

function orderTea(teaType) {
  function confirmOrder() {
    return `Order Confirmed for ${teaType}`;
  }
  return confirmOrder();
}

result = orderTea("green tea");
console.log(result);

//--> Write a arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. the function should return the total cost by multiplying the 'price' and 'quantity'. store the result in a variable named 'totalCost'.

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

const totalCost = calculateTotal(200, 5);
console.log(totalCost);

//--> Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument "ealrl grey", return the result of calling 'makeTea'.

function processTeaOrder(callback){
   return callback('earl gray');
}

function makeTea(tea) {
    const message = `Making the tea ${tea}` 
    console.log(message);
    return message;
}

const order = processTeaOrder(makeTea);
console.log(order);


//--> Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType' and return a message like "making green tea". Store the returned function in a variable named 'teaMaker' and call it with "green tea".

function createTeaMaker() {
    return function (teatype) {
        return "Making " + teatype;
    }
};

const teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));











//////////////////// Regular function vs arrow function ///////////////

//Regular function.

const person1 = {
  name: "Akhil",
  greet: function () {
    console.log("Hello, I'm " + this.name);
  },
};

person1.greet(); // prints "Hello, I'm Akhil"
//Arrow function.

const person2 = {
  name: "Akhil",
  greet: () => {
    console.log("Hello, I'm " + this.name);
  },
};

person2.greet(); // prints "hello, i'm undefined"

//Reason.
//Arrow funcioni does't create it's own this. it uses this from the outer scop - in this case, the global socpe or module scope which does't have a name property. but it can access "this".

// To get the "this" value for the above case we can use 2 approches. we can make a outer funciton of arrow function and so that the outer function has access to the name as it has its own this.. so that we can access the same on arrow funciton also.. or next approch is to bind the value of name in the global socope.

//Example1: Lexical scoping from outer function.
const person3 = {
  name: " Akhil Balan",
  greet: function () {
    // Arrow function defined inside regular function
    const showName = () => {
      console.log("Hello, I'm " + this.name);
    };
    showName();
  },
};

person3.greet(); // ✅ "Hello, I'm Akhil Balan"

//Example2: Lexical scoping from global scope

globalThis.name = "Akhil";
const person4 = {
  name: "Akhil",
  greet: () => {
    console.log("Hello, I'm " + this.name);
  },
};

person4.greet(); // ✅ "Hello, I'm Akhil"
