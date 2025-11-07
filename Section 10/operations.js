//1. Arithmetic Operators
//🔹 Used for math calculations.
let a = 10, b = 3;

console.log(a + b);// 13 -> addition
console.log(a - b);// 7 -> subtraction
console.log(a * b);// 30 -> multiplication
console.log(a / b);// 3.3333333333333335 -> division
console.log(a % b);// 1 -> modulus(remainder)
console.log(a ** b);// 1000 -> exponent (10 to the power of 3 (10³))


//2. Assignment Operators
//🔹 Assign or update variable values.
let x = 5; // =assignment
x += 3; // x = x+3 -> 8
x -= 2; // x = x-2 -> 6
x *= 2; // x = x*2 -> 12
x /= 3; // x = x/3 -> 4
x %= 2; // x = x%2 -> 0

//3. Comparison Operations
//🔹 Compare two values → returns a Boolean (true / false).
let n = 5, m = "5";

console.log(n == m);// true cause loosely equlity operator checks only the value not type.
console.log(n === m);// false cause strictly equlity operator check value and type.
console.log(n != m);// false since it checks only values
console.log(n !== m); // true since it checks value and type
console.log(a > 3); // true
console.log(b <= 4); // false

//Note:
//The following are the only values in JavaScript that are always considered falsy:
/*
1. The boolean false

2. The number 0 (and -0)

3. The BigInt zero 0n

4. The empty string "" (or '' or ```)

5. null

6. undefined

7. NaN (Not-a-Number)

8. document.all (A historical and rarely encountered value, but technically falsy)
 */

//4. Logical Operators
//🔹 Combine or invert boolean expressions.

//a) && Logical AND Operator.
/*
A && B
---> If A is falsy, return A.
---> If A is true, return B.

*/ 

let isLogged = true, hasAccess = false;

console.log(isLogged && hasAccess); // false -> both must be true to be true in logical AND.

console.log(true && "hi"); // since first value is true it return second value.

console.log(0 && true) // since the first value is zero which is false it return the same.

console.log("hi" && true)// since the first value is true it returns the second value

//b) Logical OR Operators

//---> If A is truthy, return A.
//---> If A is falsy, rturn B.

isLogged = true, hasAccess = false;

console.log(isLogged || hasAccess) // true -> at leaston true return true
console.log(0 || 1) // return 1 since first value is false
console.log(1 || 0) // return 1 since first value itself is true


//c) Logical Not Operators.
//---> If A is truthy, return false.
//---> If A is falsy, return true. 

// 🧠result always will true or false

console.log(!isLogged) // false  negation true become false false become true.
console.log(!hasAccess) // true negation true become false false become true.

//Note: logical double NOT.
//So !! is a clean shorthand for converting any type to a boolean.

console.log(!!true);       // true
console.log(!!0);          // false
console.log(!!1);          // true
console.log(!!"hello");    // true
console.log(!!"");         // false
console.log(!!undefined);  // false
console.log(!!null);       // false


//d) Bitwise Operations
//🔹 Operate on binay (bit-level) values.

a = 5; // 0101
b = 3; // 0011

console.log(a & b); // 0001 which is 1 (Returns 1 only if both bits are 1)
console.log(a | b); // 0111 which is 7 ( Returns 1 if either bit is 1)
console.log(a ^ b); // 0110 which is 6 (“Exclusive OR” — Returns 1 if bits are different)
console.log(~a); // 1010 which is -6 (“Exclusive OR” — Returns 1 if bits are different )
console.log(a << 1); // 1010 which is 10 (Moves bits to the left by specified positions.)
console.log(a >> 1); // 0010 which is 2 (Moves bits to the right by specified positions.)


//6. String Operations

//🔹 Mainly concatenation and template literals.

let first = "Hello";
let second = "World";

console.log(first + " " + second); //Hello World 
console.log(`${first} ${second}!`); //Hello World!

//7. Ternary Operation
//🔹 Short form of if-else statement.

let age = 20;
let msg = age >= 18 ? "You are an adult" : "You are a child";
console.log(msg);

//8. Spread & Rest Operators.
//🔹 Spread (...) expands; Rest (...) collects.

// Spread:

let arr1 = [1, 2, 3];

let arr2 = [...arr1, 3, 4, 5]

console.log(arr2)

//Rest:

const array = [1, 2, 3];

function sum(...nums) {
    return nums.reduce((a,b)=>a+b,0);
}

const result = sum(...array);
console.log(result);

//9. conditional Operations (if/else, switch)
//🔹 Run code based on conditions.

// if else
let score = 89;

if (score > 90) {
    console.log('Grade is: A')
} else if (score > 75) {
    console.log("Grad is: B")
} else {
    console.log("Grade is: C")
}

// switch

switch (true) {
    case (score>90):
        console.log("Grade is: A");
        break;
    case (score>80):
        console.log("Grade is: B");
        break;
    case (score>70):
        console.log("Grade is: C");
        break;
    case (score> 60):
        console.log("Grade is: D");
        break;
    case (score> 50):
        console.log("Grade is: E")
        break;
    default:
        console.log("You failed");
    
}

//10. Nullish Coalescing operator (??)
//🔹 Returns the right-hand value only if the left-hand side is null or undefined. else it return left hand value.

let userName = undefined;
let defaultName = "Guest";

console.log(userName ?? defaultName);

//11. Optional Chaining (?.)
//🔹 Prevents errors when accessing properties that may not exist. Returns undefined instead of throwing an error if something is missing.

let user = {
    name: "Akhil",
    age: 20,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
}

console.log(user?.address?.state); // Maharashtra
console.log(user?.address?.country); // undefined (no error)

//12. Typeof Operator
//🔹 Returns the type of the value as a string.

console.log(typeof "Hello");// String
console.log(typeof 10);// Number
console.log(typeof true);// Boolean
console.log(typeof null);// Object (quirk in JS)
console.log(typeof undefined);// Undefined
console.log(typeof Symbol());// Symbol
console.log(typeof {});// Object
console.log(typeof []);// Object

//13. Unary Operations
//🔹 Operate on a single operand.

let z = 5;
console.log(-z); // -5 (negation)
console.log(typeof -z);
console.log(+z); // 5 (conversion to number)
console.log(!true); // false (logical NOT)
console.log(~5); // -6 (bitwise NOT)
console.log(typeof "hi"); // string
delete z; // deletes the variable

//14. Shorthan Operations.
//🔹 Compact ways to write longer expressions.

x += 5; //x = x + 5
let count = 9;
count++; // count = count + 1
userName || "Guest";// if userName is undefined it returns "Guest"
// value &&= compute(); //value = value && compute

//15. Increment / Decrement Operations.
//🔹 Update the value of a variable by 1( can be positive or negative).

let i = 5;
console.log(i++) // 5 returns actually increments by 1 after return.
console.log(++i) // 6 returns increments by 1 before return
console.log(i--) // 6 returns decrements by 1 after return
console.log(--i) // 5 returns decrements by 1 before return


