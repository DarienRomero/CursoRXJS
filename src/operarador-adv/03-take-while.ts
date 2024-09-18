import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
    map(({x, y}) => ({
        x,y
    })),
    // takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true)//Inclusive el valor que rompe el takeWhile
).subscribe({
    next: ({x, y}) => console.log(`X: ${x}, Y: ${y}`),
    error: console.error,
    complete: () => console.log('Subscripción finalizada')
})