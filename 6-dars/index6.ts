// TypeScript classes & Inheritance (vorislik olish)


class Persons {
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

class Student extends Persons {
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


class Teacher extends Persons {
    desciplines: string[] = [];

    constructor(name: string, age: number, desciplines: string[]) {
        super(name, age);
        this.desciplines = desciplines;
    }

    info(): string {
        const parent = super.sayHello();
        return `${parent} Men ${this.desciplines[0]} dan dars beraman`;
    }
}


const lazizbek_a: Persons = new Persons("Lazizbek", 22)

console.log(lazizbek_a)

const sardor: Student = new Student("Sardor", 24, "110-maktab", 4);
console.log(sardor);
console.log(sardor.sayHello());


const newSardor: Persons = <Persons>sardor;

console.log(newSardor);
console.log(newSardor.sayHello());



const abror: Teacher = new Teacher("Abror", 34, ["Node js", "JS"])

console.log(abror);
console.log(abror.sayHello());
console.log(abror.info());