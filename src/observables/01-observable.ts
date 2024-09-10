import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Hola2');
    //Forzar un error
    const a = undefined;
    a.nombre = 'Darien'
    subs.complete();
    //Ninguna emisión después del complete va ser emitida a los subscriptores
});

/* obs$.subscribe(
    valor => console.log(valor),
    err => console.log(err),
    () => console.log('Subscripción finalizada')
) */

const observer: Observer<string> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}
obs$.subscribe(observer)