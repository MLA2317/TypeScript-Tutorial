"use strict";
// TypeScripts [public, private, protected, (readonly)]
class Person2 {
    // constructor(public name: string, private age: number) {
    constructor(name, age) {
        this._name = "";
        // public _name: string = "";
        // private _name: string = "";  // boshqa classda yoki objectda foydalanomimz
        // protected _name: string = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Assalomu Aleykum, Mening ismim ${this._name}!`;
    }
}
class Student2 extends Person2 {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    info() {
        return `
            Name: ${this._name}
            Age: ${this._age}
            Group: ${this._group}
            Course: ${this._course}`;
    }
}
const siroch = new Person2("Siroch", 23);
console.log(siroch);
const sirch = new Student2("Sirch", 24, "197-maktab", 4);
console.log(sirch);
//# sourceMappingURL=index9.js.map