
// la <T> es una variable que representa el tipo que se le pasa al argumento
export function watsMyType<T>(argument: T): T {

    return argument;
}

// con <string> le decimos que el argumento es de tipo string y así con los demás
const amIString = watsMyType<string>("Hola Mundo");
const amINumber = watsMyType<number>(123);
const amIArray = watsMyType<number[]>([1, 2, 3]);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);
