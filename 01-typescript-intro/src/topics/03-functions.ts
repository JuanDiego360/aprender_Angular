function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `La suma es ${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

interface Character {
    name: string;
    hp: number;
    showHP: () => void;
}

//funcion que recibe un objeto Character y una cantidad
const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

//  creamos un objeto que cumpla con la interface Character
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

//llamamos a la funcion healCharacter con el objeto strider y una cantidad
strider.showHP();
healCharacter(strider, 30);
strider.showHP();


// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult });