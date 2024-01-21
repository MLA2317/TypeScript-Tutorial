// TypeScript sinflar "class"


class Person {
    _name: string = "Lazizbek";
    _age: number = 23;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // 1 ta class da constructo faqat 1 marta foydlaniladi

    // method
    info(value: number): string {
        return `${this._name} - ${this._age + value} da`;
    }

    // method1() {}
    // method2() {} istalgancah foydalansa boladi methodladan   

    static isFlying = false; // bunda faqat class orqali chaqiriladi
    static description(): string {
        return `Bu class Person haqida ....`;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value; 
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if(value > 0 && value < 100) {
            this._age = value;
        } else {
            throw new Error("Siz notogri yosh kiritdingiz");
        }
    }
}

const lazizbek: Person = new Person("Lazizbek", 22);
const ismoil: Person = new Person("Ismoil", 24);

// console.log(lazizbek.info(2));
// console.log(ismoil);

// console.log(Person.isFlying);
// console.log(Person.description());

console.log(ismoil);
ismoil.age = -2;

console.log(ismoil.age)