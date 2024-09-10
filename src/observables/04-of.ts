import {Observer, of} from 'rxjs';

const observer: Observer<number> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

//El of es síncrono
const obs$ = of(1,2,3,4,5,6)

console.log("Inicio del obs")
obs$.subscribe(observer)
console.log("Fin del obs")