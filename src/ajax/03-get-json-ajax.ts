import { catchError, of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error: ', resp.message)
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
}).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

obs$.subscribe((data)=>console.log(data));
// obs2$.subscribe((data)=>console.log(data));
obs2$.subscribe({
    next: (data) => console.log(data),
    error: (err) => console.error('Error:', err),
    complete: () => console.log('Subscripción finalizada')
})