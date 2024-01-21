// TypeScript namespace

namespace Utils {
    export function log(text: string, color: string, fontSize: string): void {
        if(fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        } else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }

    log("Salom TypeScript", "red", "32px");
    
}

Utils.log("Salom", "White", "24px");


namespace Animals {
    export abstract class Animal {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        abstract say(): void;
    }
}


namespace Animals {
    export class Tiger extends Animals.Animal {
        private sound: string;

        constructor(name: string, sound: string){
            super(name);
            this.sound = sound;
        }

        say(): void{
            Utils.log(`${this.name} - ${this.sound}`, "blue", "24px");
        }
    }

    export namespace Pets {
        export class Cat extends Animals.Animal {
            private sound: string;


        constructor(name: string, sound: string){
            super(name);
            this.sound = sound;
        }

        say(): void{
            Utils.log(`${this.name} - ${this.sound}`, "blue", "24px");
        }
       } 
    }
}

const tiger = new Animals.Tiger("Sher", "RRRRR");

tiger.say()


const cat = new Animals.Pets.Cat("Mushuk", "Miyau");
cat.say()