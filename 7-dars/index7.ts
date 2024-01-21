// TypeScript interface

// interface IPerson {
//     _name: string;
//     _age: number // requirement
//     //_age?: number; // not requirement
//     sayHello(): string; //sayHello: () => string; 
// }


// type IPerson = {
//     _name: string;
//     _age: number;
//     sayHello(): string;
// }


// ===========

// interface IPerson {
//     _name: string;
//     _age: number;
// }


// interface IPerson {
//     sayHello(): string;
// }


// type IPerson = {  // Ikkita bir hil tip elon qilib bomidi type da
//     _name: string;
//     _age: number;
// }

// type IPerson = {
//     sayHello(): string;
// }


// ===================================

interface IPersonProps {
    _name: string;
}

interface IPersonProps2 {
    _age: number;
}


interface IPerson extends IPersonProps, IPersonProps2{
    sayHello(): string;
}


class Personss implements IPerson {
    _name: string = "";
    _age: number = 0;

    constructor (name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    sayHello(): string {
        return `Assalomu Aleykum, Mening ismim ${this._name}`
    }
}

class Students extends Persons {
    _group: string = "";
    _course: number = 0;


    constructor(name: string, age: number, group: string, course: number) {
        super(name, age) // super - vorislik olib keladi Person classni fieldlaridan
        this._group = group;
        this._course = course;
    }

    sayHello(): string {
        const parentMethod = super.sayHello();
        return `${parentMethod} Men ${this._course} chi kursning, ${this._group} da o'qiyman`;
    }
}


const lazizbek_a_: Persons = new Persons("Lazizbek", 22)

console.log(lazizbek_a_)

const sardorbek: Student = new Student("Sardor", 24, "110-maktab", 4);
console.log(sardorbek);
console.log(sardorbek.sayHello());
