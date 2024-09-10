import {range, Observer, of, asyncScheduler, interval, timer} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: err => console.warn(err),
    complete: () => console.log('Subscripción finalizada')
}

setTimeout(() => {
    
}, 3000);

setInterval(() => {
    
}, 3000);

const saludar = () => console.log("Hola Mundo");
const saludar2 = (nombre) => console.log("Hola Mundo " + nombre);

const subs = asyncScheduler.schedule(
    function(state) {
        console.log('state', state);
        this.schedule(state + 1, 1000)
    },
    2000,
    0
);

// setTimeout(()=>{
//     subs.unsubscribe
// }, 6000);

asyncScheduler.schedule(()=>subs.unsubscribe(), 6000)