"use strict";
// TypeScript => function, signature function, function overloads
// function pow(x, y) { // its in javascript
//     return x ** y;
// }
// Function
function pow(x, y) {
    //return x ** y; // number
    return `${x} ** ${y} = ${x ** y}`; // string
}
console.log(pow(2, 4));
const add = (x, y) => x + y;
function log(x) {
    //console.log(x);
}
function someFunc(s) {
    throw new Error(s);
}
// Signature Function
let s;
s = function (a, b) {
    return `${b}: ${a}`;
};
console.log(s(2, "Javob"));
// function overloads
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc(4, 5));
//# sourceMappingURL=index2.js.map