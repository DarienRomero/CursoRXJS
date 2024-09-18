import { fromEvent, interval, skip, takeUntil } from "rxjs";

const boton = document.createElement('button')
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton)

const counter$ = interval(1000);

const clickBtn$ = fromEvent(boton, 'click').pipe(
    skip(1)
)

counter$.pipe(
    takeUntil(clickBtn$)
)

.subscribe({
    next: (value) => console.log('Contador:', value),
    error: console.error,
    complete: () => console.log('Subscripción finalizada')
})