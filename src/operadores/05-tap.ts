import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5)

//Sirve para ejecutar codigo antes de cada emision
numeros$.pipe(
    tap(x => console.log('antes', x)),
    map( val => val *10),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log("Se terminó todo")
    })


)
.subscribe({
    next : (val) => console.log('subs', val),
    complete: () => console.log("Se terminó todo 2")
})