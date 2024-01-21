"use strict";
// TypeScript sinflar "class"
class Person {
    constructor(name, age) {
        this._name = "Lazizbek";
        this._age = 23;
        this._name = name;
        this._age = age;
    }
    // 1 ta class da constructo faqat 1 marta foydlaniladi
    // method
    info(value) {
        return `${this._name} - ${this._age + value} da`;
    }
    static description() {
        return `Bu class Person haqida ....`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 100) {
            this._age = value;
        }
        else {
            throw new Error("Siz notogri yosh kiritdingiz");
        }
    }
}
// method1() {}
// method2() {} istalgancah foydalansa boladi methodladan   
Person.isFlying = false; // bunda faqat class orqali chaqiriladi
const lazizbek = new Person("Lazizbek", 22);
const ismoil = new Person("Ismoil", 24);
// console.log(lazizbek.info(2));
// console.log(ismoil);
// console.log(Person.isFlying);
// console.log(Person.description());
console.log(ismoil);
ismoil.age = -2;
console.log(ismoil.age);
//# sourceMappingURL=index5.js.map