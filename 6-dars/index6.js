"use strict";
// TypeScript classes & Inheritance (vorislik olish)
class Persons {
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
class Student extends Persons {
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
class Teacher extends Persons {
    constructor(name, age, desciplines) {
        super(name, age);
        this.desciplines = [];
        this.desciplines = desciplines;
    }
    info() {
        const parent = super.sayHello();
        return `${parent} Men ${this.desciplines[0]} dan dars beraman`;
    }
}
const lazizbek_a = new Persons("Lazizbek", 22);
console.log(lazizbek_a);
const sardor = new Student("Sardor", 24, "110-maktab", 4);
console.log(sardor);
console.log(sardor.sayHello());
const newSardor = sardor;
console.log(newSardor);
console.log(newSardor.sayHello());
const abror = new Teacher("Abror", 34, ["Node js", "JS"]);
console.log(abror);
console.log(abror.sayHello());
console.log(abror.info());
//# sourceMappingURL=index6.js.map