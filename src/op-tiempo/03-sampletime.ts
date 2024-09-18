//Emite cada intervalo el último valor
//Si no se recibe nada en el intervalo, no se emite

import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    sampleTime(1000)
)
.subscribe(console.log)