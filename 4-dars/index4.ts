// TypeScript - Array, tuples & Emums;



// Toplamlar

let p = [];
p = [12, "sd", true, undefined, {}];

//let p1 = [1, 2, 3, 4];

// p1 = ["sdwsad"]; // can't change to string
let p1: number[] = [1, 2, 3, 4];

p1 = [12, 23];


let p2: Array<number> = [1, 2, 3, 4];
p2 = [5, 6, 7]


let p3: (number | string | object | boolean)[] = [12, "sad", 232];

let p4: Array<boolean | number> = [true, false, 12];
// p4 = [12, true, "sref"] // can't enter string


// =====================================
// tuples

let p5: [number, string];

p5 = [12, "sadq"];

// p5 = ['wqe'] // can't enter string, because 0 index in number

// p5 = [123, "asq", "asd"] // can't enter two string


let p6: [number, [number, string]];

p6 = [123, [123, "sadea"]];



// ===================================
// Qayta hisoblash - Enums

// number | symbol | stirng
enum Gender {
    male,
    female,
}

console.log(Gender.male, Gender.female); // output = 0, 1
console.log(Gender[Gender.male], Gender[Gender.female]) // male, female


enum G {
    a, 
    b = 10,
    c,
}

console.log(G.a, G.b, G.c);