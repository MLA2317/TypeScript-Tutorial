"use strict";
// TypeScript abstract classes
class Person1 {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Assalomu Aleykum, Mening ismim ${this._name}!`;
    }
}
class Student1 extends Person1 {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._age = age;
    }
    info() {
        return `
            Ism: ${this._name}
            Yoshi: ${this._age}
            Kurs: ${this._course}
            Guruhi: ${this._group}
            `;
    }
}
const sardors = new Student1("Sardor", 24, "198-maktab", 4);
//console.log(sardors);
console.log(sardors.info());
//# sourceMappingURL=idnex8.js.map