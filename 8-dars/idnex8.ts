// TypeScript abstract classes

interface IPerson1 {
    _name: string;
    _age: number;
    sayHello(): string;
    info(): string;
}

interface IStudent extends IPerson1 {
    _group: string;
    _course: number;
}


abstract class Person1 implements IPerson1 {
    _name: string = "";
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    sayHello(): string {
        return `Assalomu Aleykum, Mening ismim ${this._name}!`;
    }

    abstract info(): string;
}

class Student1 extends Person1 implements IStudent {
    _group: string = "";
    _course: number = 0;


    constructor(name: string, age: number, group: string, course: number) {
        super(name, age);
        this._group = group;
        this._age = age;
    }

    info(): string {
        return `
            Ism: ${this._name}
            Yoshi: ${this._age}
            Kurs: ${this._course}
            Guruhi: ${this._group}
            `
    }
}

const sardors: IStudent = new Student1("Sardor", 24, "198-maktab", 4);

//console.log(sardors);
console.log(sardors.info());