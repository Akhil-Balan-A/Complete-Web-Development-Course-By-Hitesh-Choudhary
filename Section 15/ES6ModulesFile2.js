// ///////////////// ES6-Modules //////////////////
// // for making the files ES6 modules we need to change the file extension from .js to .mjs or add  "type": "module" in the package.json. If workingin the browser use the type="module" in the script tag.
// import { add, subtract } from "./ES6ModulesFile1.js";// named import must use the same name for import

// console.log(add(2, 3));
// console.log(subtract(2, 3));

// import calculate from "./ES6ModulesFile1.js"; // default import can use any name.

// console.log(calculate(2, 3));


////////////////// CommonJS-Modules //////////////////
const { sum,divide } = require("./ES6ModulesFile1.js");// named import must use the same name for import

console.log(sum(2, 3));
console.log(divide(2, 3));