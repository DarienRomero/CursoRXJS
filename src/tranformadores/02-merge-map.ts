//El merge map crea un intervalo por cada emisión del observable
import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map((i) => letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log("next: ", val),
//     complete: () => console.log("complete: "),
//     error: val => console.log("error: ", val)
// });
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval(1);

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
)

.subscribe(console.log)