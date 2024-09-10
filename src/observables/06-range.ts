import {range, Observer, of, asyncScheduler} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

const src1$ = of(1,2,3,4,5);
const src2$ = range(1,5, asyncScheduler);

console.log("Inicio")
src2$.subscribe(console.log)
console.log("Fin")


