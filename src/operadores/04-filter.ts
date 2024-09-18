import {fromEvent, Observer, of, range} from 'rxjs';
import {filter, map, mapTo, pluck} from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

// range(1,10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(console.log)

// range(1,10).pipe(
//     filter((val, i) => val % 2 === 1)
// ).subscribe(console.log)

const personajes = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    }
];

of(...personajes).pipe(
    filter((val, i) => val.tipo === "Heroe" ),
    map((val) => val.nombre)
).subscribe(console.log)

const src2$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
).subscribe(console.log)