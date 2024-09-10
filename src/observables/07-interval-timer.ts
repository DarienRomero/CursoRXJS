import {range, Observer, of, asyncScheduler, interval, timer} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

const interval$ = interval(1000);
const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)
//delay
const timer1$ = timer(2000);
//Es como crear un interval que inicia en 2 segundos
const timer2$ = timer(2000, 1000);
//Es como crear un interval que inicia dentro de 5 segundos
const timer3$ = timer(hoyEn5);

console.log("Inicio")
// interval$.subscribe(observer)
timer3$.subscribe(observer)
console.log("Fin")

