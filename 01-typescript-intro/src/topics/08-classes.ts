export class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    constructorVacio() {
        this.name = '';
        this.age = 0;
        this.address = '';
    }
}

//herencia
export class Hero extends Person {
    public alterEgo: string;
    public realName: string;
    constructor(name: string, age: number, address: string, alterEgo: string, realName: string) {
        super(name, age, address); //llama al constructor de la clase padre
        this.alterEgo = alterEgo;
        this.realName = realName;
    }
}

//priorizar composicion sobre herencia
export class Hero2 {
    constructor(public alterEgo: string, public realName: string, public person: Person) {
    }
}

//crear una instancia de la clase
const hero = new Hero('Spiderman', 30, 'Calle 1', 'Peter', 'Juan');
const hero2 = new Hero2('Spiderman', 'Calle 1', new Person('Juan', 30, 'Calle 1'));
console.log(hero);
console.log(hero2);