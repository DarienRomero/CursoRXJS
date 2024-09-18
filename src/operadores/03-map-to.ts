import {fromEvent, Observer, range} from 'rxjs';
import {map, mapTo, pluck} from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
)

keyupMapTo$.subscribe(val => console.log('map', val))