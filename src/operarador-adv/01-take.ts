import { of, take, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap(console.log),
    take(3),
    tap(console.log),
)
    .subscribe({
        next: (valor) => console.log(valor),
        error: (error) => console.error(error),
        complete: () => console.log('Subscripción finalizada')
    })