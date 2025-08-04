
// Basic Arithmetic
 function add(a, b) {
    return a + b;
}

 function subtract(a, b) {
    return a - b;
}

 function multiply(a, b) {
    return a * b;
}

 function divide(a, b) {
    return a / b;
}

 function remainder(a, b) {
    return a % b;
}

 function power(a, b) {
    return a ** b;
}

// Rounding & Absolute
 function round(a) {
    return Math.round(a);
}

 function ceil(a) {
    return Math.ceil(a);
}

 function floor(a) {
    return Math.floor(a);
}

 function trunc(a) {
    return Math.trunc(a);
}

 function toFixed(a, digits) {
    return Number(a.toFixed(digits));
}

 function abs(a) {
    return Math.abs(a);
}

// Root operations
 function sqrt(a) {
    return Math.sqrt(a);
}

 function cbrt(a) {
    return Math.cbrt(a);
}

// Min, Max, Random
 function max(a, b) {
    return Math.max(a, b);
}

 function min(a, b) {
    return Math.min(a, b);
}

 function random() {
    return Math.random();
}

// Trigonometry
 function sin(a) {
    return Math.sin(a);
}

 function cos(a) {
    return Math.cos(a);
}

 function tan(a) {
    return Math.tan(a);
}

 function asin(a) {
    return Math.asin(a);
}

 function acos(a) {
    return Math.acos(a);
}

 function atan(a) {
    return Math.atan(a);
}

// Logs & Exponentials
 function log(a) {
    return Math.log(a); // natural log
}

 function log10(a) {
    return Math.log10(a);
}

 function exp(a) {
    return Math.exp(a); // e^a
}

// Clamp, Average, Factorial
 function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

 function average(...nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}

 function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

// GCD & LCM
 function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

 function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Degrees ↔ Radians
 function degToRad(deg) {
    return deg * (Math.PI / 180);
}

 function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

// Even & Odd Check
 function isEven(n) {
    return n % 2 === 0;
}

 function isOdd(n) {
    return n % 2 !== 0;
}
