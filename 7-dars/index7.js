"use strict";
// TypeScript interface
class Personss {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Assalomu Aleykum, Mening ismim ${this._name}`;
    }
}
class Students extends Persons {
    constructor(name, age, group, course) {
        super(name, age); // super - vorislik olib keladi Person classni fieldlaridan
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    sayHello() {
        const parentMethod = super.sayHello();
        return `${parentMethod} Men ${this._course} chi kursning, ${this._group} da o'qiyman`;
    }
}
const lazizbek_a_ = new Persons("Lazizbek", 22);
console.log(lazizbek_a_);
const sardorbek = new Student("Sardor", 24, "110-maktab", 4);
console.log(sardorbek);
console.log(sardorbek.sayHello());
//# sourceMappingURL=index7.js.map