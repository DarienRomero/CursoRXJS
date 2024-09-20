import { catchError, map, of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
const url = 'https://api.github.com/usersxx?per_page=5';


// const manejaErrores = (response: Response) => {
//     if(!response.ok){
//         throw new Error(response.statusText)
//     }
//     return response;
// }

// const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(err => console.warn(err))

const atrapaError = (err: AjaxError) => {
    console.warn('Error en:', err)
    return of([]);
}

ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
)
.subscribe(users => console.log('usuarios: ', users))