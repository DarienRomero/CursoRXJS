import {fromEvent, Observer, range} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupPluck$ = keyup$.pipe(
    pluck('code')
)

const keyupPluck2$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyupPluck$.subscribe(val => console.log('map', val))