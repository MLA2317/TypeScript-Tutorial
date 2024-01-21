"use strict";
// TypeScript namespace
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    Utils.log = log;
    log("Salom TypeScript", "red", "32px");
})(Utils || (Utils = {}));
Utils.log("Salom", "White", "24px");
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
(function (Animals) {
    class Tiger extends Animals.Animal {
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }
        say() {
            Utils.log(`${this.name} - ${this.sound}`, "blue", "24px");
        }
    }
    Animals.Tiger = Tiger;
    let Pets;
    (function (Pets) {
        class Cat extends Animals.Animal {
            constructor(name, sound) {
                super(name);
                this.sound = sound;
            }
            say() {
                Utils.log(`${this.name} - ${this.sound}`, "blue", "24px");
            }
        }
        Pets.Cat = Cat;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
const tiger = new Animals.Tiger("Sher", "RRRRR");
tiger.say();
const cat = new Animals.Pets.Cat("Mushuk", "Miyau");
cat.say();
//# sourceMappingURL=index10.js.map