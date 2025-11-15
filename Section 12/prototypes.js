let myVals = [1, 2, 3, 4];
console.log(myVals);

let obj = {
    name: "Akhil",
    age: 20
}
console.log(obj);

const name = new String("Akhil");
console.log(name);

const set = new Set([1, 2, 3]);
console.log(set);

const map = new Map();
map.set("name", "Akhil");
console.log(map);

const num = new Number(10);
console.log(num);

const bool = new Boolean(true);
console.log(bool);

///////////////////////////////////

let computer = { cpu: 12 };
let lenovo = { screen: "HD" };
let Hardware = {};


console.log(computer.__prpoto__);
console.log(lenovo.__proto__);
console.log(Hardware.__proto__);

let car = {
    wheels: 4,
    color: "red"
};
let tesla = {
    driver: 'AI'
}

Object.setPrototypeOf(tesla, car);//tesla.__proto__ = car also do the same thing. here tesla is child and car is parent. Inheritance

// tesla.__proto__.color = "blue";//direct set color

console.log(tesla.color);


Object.defineProperty(Array.prototype, "devLength", {
    get() {
        return this.length - 1;
    }
});

const arr = [1, 2, 3, 4, 5];
console.log(arr.devLength);
console.log(arr.length);

const result  = Array.prototype.hasOwnProperty("devLength");
console.log(result)