//Emite el último arreglo de valores 
//cuando todos los observables se
//han completado

import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe(delay(3500));
// forkJoin(numeros$, intevalo$, letras$)
//     .subscribe(console.log)

forkJoin({numeros$, intervalo$, letras$})
    .subscribe((data) => {
        console.log('Numeros:', data.numeros$);
        console.log('Intervalos:', data.intervalo$);
        console.log('Letras:', data.letras$);
    })