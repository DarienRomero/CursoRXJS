import { first, fromEvent, map, of, take, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    // first(),//Es como un take 1
    first(x => x >=3),

    tap(console.log),
)
    .subscribe({
        next: (valor) => console.log(valor),
        error: (error) => console.error(error),
        complete: () => console.log('Subscripción finalizada')
    })

    const click$ = fromEvent<MouseEvent>(document, 'click');

    interface Coordinates { clientX: number; clientY: number}

    click$.pipe(
        tap<MouseEvent>(console.log),
        map<MouseEvent, Coordinates>(({clientX, clientY}) => ({clientX, clientY})),
        first(event => event.clientY >= 150),
    ).subscribe({

        next: (valor) => console.log(valor),
        error: (error) => console.error(error),
        complete: () => console.log('Subscripción finalizada')
    })