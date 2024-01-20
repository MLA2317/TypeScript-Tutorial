"use strict";
// TypeScriptda tiplarni o'zgaritirish va birlashtirish.
// unknow type, union types, literal types, type aliases, required and optional properties, operation in
// havfli usul
let w = 10;
let q = w; // we can change variable
// havsiz usul
let h = 20.12;
// let t: number = c; // we can't change variable
let u = h;
let i = h; // change to tips like this
// (h as number).toFixed(2); //toFixed - kesib olib tashlidi
// (<number>h).toString();
// union type
let z = 10;
z = "test";
z = true;
// literal types - razmerlani olchidi
let j;
j = "sm"; // small
j = "md"; // middle
j = "lg"; // long
// type aliases
//# sourceMappingURL=index3.js.map