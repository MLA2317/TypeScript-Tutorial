// TypeScriptda asosiy ma'lumot turlari

// let a = 12; // number
// a = 'str'; // can't change to string in number
// a = true // can't change to boolean in number
// a = {} // can't change to object in number
// a = 12 + 12 // only give number



let a: number; // variable let a: number -> this number is tip for a
a = 17;

// let b = "text"; // string
// b = true // can't change to boolean in str
// b = 23 // can't change to number in str
// b = "string"; // only change to string

let b: string = "text"; // "", '', ``

// let c = true; // boolean
// c = 12 // can't change to number in boolean
// c = function () {};  can't change to function in boolean

let c: boolean = false


//let d = null;
let d: null = null; // only accepts null
// d = undefined; //can't change to undefined in null


// let e = undefined;
let e: undefined = undefined; // only accepts undifined



// let f = {}; // object
// let f: object = {};
// f = 12; // can't change to number in object


// f = {name: "Salom"};
// f.name // error

let f: {name: string} = {name: "Salom"};
// f.name = "Dunyo" // i can use property name

let g: any // tips any, all use in any
g = 12;
g = "text";
g = false;
g = {name: "qwerty"};
g = function () {};
g = [];
g = null;
g = undefined;

