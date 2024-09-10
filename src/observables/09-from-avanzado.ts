import { of, from, Observer} from 'rxjs';

// of = toma argumentos y genera una secuencia
// from = array, promise, iterable,observable
const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

// const source$ = from([1,2,3,4,5])
// const source$ = of(...[1,2,3,4,5])
// const source$ = from('Darien')
const source$ = from(fetch('https://api.github.com/users/klerith'))

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for(let id of miIterable){
//     console.log(id);
// }

from(miIterable).subscribe(observer)

// source$.subscribe(async (resp) => {
//     console.log(resp.ok);
//     const dataResp = await resp.json();
//     console.log(dataResp)
// })