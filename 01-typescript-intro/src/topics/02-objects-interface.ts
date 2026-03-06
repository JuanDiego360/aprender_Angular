const skills: string[] = ['Bash', 'Counter', 'Healing'];

//es una definicion de como debe ser un objeto
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

//es una instancia de la interface Character
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
}

//para definir una propiedad opcional se usa el signo ?
strider.hometown = 'Rivendell';

//imprimir en consola
console.table(strider);