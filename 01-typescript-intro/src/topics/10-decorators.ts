function classdecoration<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    }
}

@classdecoration
export class SuperClass {
    public MyProperty: string;

    constructor() {
        this.MyProperty = "Hello";
    }

    print() {
        console.log(this.MyProperty);
    }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass.print());