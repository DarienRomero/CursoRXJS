import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, tap, switchMap, mergeMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { GithubUsersResp } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}



// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => (<HTMLInputElement>event.target).value),
    mergeMap<string, Observable<GithubUsersResp>>( (texto: string) => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    map<GithubUsersResp, GithubUser[]>((data) => data.items)
    // pluck<GithubUsersResp, GithubUser[]>('items')
)
// .subscribe( (data) => {
//     console.log('data', data)
// } );

const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    pluck('target', 'value'),
    mergeMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)


