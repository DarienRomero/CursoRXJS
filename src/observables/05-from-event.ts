import {fromEvent, Observer, of} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

const src1$ = fromEvent<MouseEvent>(document, 'click')
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup')

src1$.subscribe(event => {
    console.log(event.x + ", " + event.y)
})
src2$.subscribe(event => {
    console.log(event.key)
})


