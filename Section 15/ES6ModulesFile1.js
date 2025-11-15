// ///////////////// ES6-Modules //////////////////

// //--> named Export
// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

// //--> default Export
// export default function multiply(a, b) {
//     return a * b;
// }


////////////////// CommonJS-Modules //////////////////

function sum(a, b) {
    return a + b
}

function divide (a, b) {
    return a / b
}   

module.exports = {
    sum,
    divide
}

