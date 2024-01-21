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
let s2 = "SM";
s2 = "MD";
s2 = "LG";
let s3 = false;
s3 = "MD";
s3 = "SM";
s3 = false;
let obj;
obj = { name: "str" };
obj = { age: 23 };
obj = { name: "sqw", age: 12 };
let obj2;
obj2 = { name: "Lazizbek", age: 22 };
let obj3 = { name: "Lazizbek" };
obj3 = { name: "Siroch", age: 23 };
// obj3 = {age: 23} // error, reqirement not use name
if ("age" in obj3) {
    console.log("Mavjud");
}
else {
    console.log("Mavjud emas");
}
//# sourceMappingURL=index3.js.map