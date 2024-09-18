import { from, interval, map, reduce, scan, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5]

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0)

console.log('total', total)

interval(1000).pipe(
    take(3),
    tap(console.log),
    scan(totalReducer, 5),
    tap(console.log),
)
    .subscribe({
        next: (value) => console.log('interval', value),
        error: (error) => console.error('Error:', error),
        complete: () => console.log('Intervalo finalizado')
    })

    // Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>( (acc: Usuario, cur: Usuario) => {
        return { ...acc, ...cur }
    }, { edad: 33})
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );