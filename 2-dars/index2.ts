// TypeScript => function, signature function, function overloads

// function pow(x, y) { // its in javascript
//     return x ** y;
// }

// Function

function pow(x: number, y: number): string { // its typescript 
    //return x ** y; // number
    return `${x} ** ${y} = ${x ** y}`; // string
}

console.log(pow(2, 4));

const add = (x: number, y: number): number => x+y;


function log(x: number): void {
    //console.log(x);
}

function someFunc(s: string): never { // qachonki shu funksiyaga kelsa tohtidi
    throw new Error(s)
}


// Signature Function

let s: (x: number, y: string) => string;

s = function (a: number, b: string): string {
    return `${b}: ${a}`;
}

console.log(s(2, "Javob"));



// function overloads

function overloadFunc(x: any, y: any): any {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        return `${x} ${y}`
    }
}

console.log(overloadFunc(4, 5));
