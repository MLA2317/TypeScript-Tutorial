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

type Sizes = "SM" | "MD" | "LG" | boolean;

let s2: Sizes = "SM";

s2 = "MD";
s2 = "LG";

let s3: Sizes = false;

s3 = "MD";
s3 = "SM";
s3 = false;
// s3 = 123 // can't change to numbe
// s3 = "XL"; // can't change to XL, because there isn't above

type OBJ = {name: string} | { age: number}; // OR

let obj: OBJ;
obj = {name: "str"};
obj = {age: 23};
obj = {name: "sqw", age: 12};


type OBJ2 = {name: string} & {age: number}; // AND
let obj2: OBJ2;

obj2 = {name: "Lazizbek", age: 22};
// obj2 = {name: "asw"} // its not work
// obj2 = {age: 12} // its not work


type OBJ3 = {name: string, age?: number}; // ? - bu majburiy emas

let obj3: OBJ3 = {name: "Lazizbek"};

obj3 = {name: "Siroch", age: 23};

// obj3 = {age: 23} // error, reqirement not use name


if("age" in obj3) {
    console.log("Mavjud");
} else {
    console.log("Mavjud emas");
}
