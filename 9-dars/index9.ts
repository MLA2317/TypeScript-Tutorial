// TypeScripts [public, private, protected, (readonly)]

class Person2 {
    public readonly _name: string = "";
    // public _name: string = "";
    // private _name: string = "";  // boshqa classda yoki objectda foydalanomimz
    // protected _name: string = "";
    _age: number = 0;


    // constructor(public name: string, private age: number) {

    constructor( name: string, age: number) {
        this._name = name;
        this._age = age;
    }


    public sayHello(): string {
        return `Assalomu Aleykum, Mening ismim ${this._name}!`;
    }

}


class Student2 extends Person2 {
    _group: string = "";
    _course: number = 0;


    constructor(name: string, age: number, group: string, course: number){
        super(name, age);
        this._group = group;
        this._course = course;
    }

    info(): string {
        return `
            Name: ${this._name}
            Age: ${this._age}
            Group: ${this._group}
            Course: ${this._course}`
    }
}


const siroch: Person2 = new Person2("Siroch", 23);
console.log(siroch)


const sirch: Student2 = new Student2("Sirch", 24, "197-maktab", 4);
console.log(sirch)