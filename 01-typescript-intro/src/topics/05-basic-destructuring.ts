interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

// este es un objeto
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 23,
    song: "Bohemian Rhapsody",
    details: {
        author: 'Queen',
        year: 1975
    }
}

const song = 'New Song';

//destructuring: significa romper o separar las propiedades de un objeto
// destructurando objetos
const { audioVolume, songDuration, song: anotherSong, details } = audioPlayer;
const { author, year } = details;

// imprimiendo por consola
// console.log('Audio Volumen:', audioVolume);
// console.log('Song Duration:', songDuration);
// console.log('Song:', song, anotherSong);
// console.log('Author:', author);
// console.log('Year:', year);

// esto es un array
const dnz: String[] = ['goku', 'vegeta', 'piccolo'];

//destructurando arreglos
const [, , picolo] = dnz;

// imprimiendo por consola
console.log('Primer elemento:', dnz[0]);
console.log('Segundo elemento:', dnz[1]);
console.log('Tercer elemento:', picolo);