//Emite de inmediato e ignora los siguientes valores
//dentro de un intervalo de tiempo

//Siempre emite el último valor ignorado previamente (si trialing es true)
//Inicio la cuenta desde la última emisión


import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, pluck, throttleTime } from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(
    throttleTime(3000)
).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup')

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)

.subscribe(console.log)