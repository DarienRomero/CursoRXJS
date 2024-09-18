import { distinct, from, of } from "rxjs";

const numeros$ = of(1,1,1,2,2,3,4,5,6,6,7)

// Usa ===
numeros$.pipe(distinct()). subscribe(console.log)

interface Personaje {
    nombre: string;
}
const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Batman'
    },
]

from(personajes).pipe(distinct( p => p.nombre)). subscribe(console.log)