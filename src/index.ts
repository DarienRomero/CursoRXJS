import {fromEvent, Observer, range} from 'rxjs';
import {map} from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

// range(1,5).pipe(
//     map<number, number>(val => val * 10)
// )
// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>(event => event.code)
)

keyupCode$.subscribe(val => console.log('map', val))