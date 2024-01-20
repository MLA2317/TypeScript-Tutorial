// TypeScriptda tiplarni o'zgaritirish va birlashtirish.
// unknow type, union types, literal types, type aliases, required and optional properties, operation in


// havfli usul
let w: any = 10;
let q: number = w;  // we can change variable

// havsiz usul
let h: unknown = 20.12;
// let t: number = c; // we can't change variable


let u: number = <number>h;
let i: number = h as number; // change to tips like this


// (h as number).toFixed(2); //toFixed - kesib olib tashlidi
// (<number>h).toString();


// union type

let z: number | string | boolean = 10;
z = "test";
z = true;


// literal types - razmerlani olchidi

let j: "sm" | "md" | "lg";

j = "sm"; // small
j = "md"; // middle
j = "lg"; // long



// type aliases

