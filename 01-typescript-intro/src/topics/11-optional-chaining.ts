export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juan',
}

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Juan', 'Maria'],
}

const printChilden = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0; // aquí es donde se usa el optional chaining
    console.log(howManyChildren);
}

printChilden(passenger1);