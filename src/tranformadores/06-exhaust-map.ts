//Solo mantiene una suscripcion activa antes de generar otra suscripcion
import { fromEvent, interval } from 'rxjs';
import { take, concatMap, exhaustMap } from 'rxjs/operators';

// Simulamos dos observables que emiten en intervalos de tiempo diferentes
const clicks = fromEvent(document, 'click');
const obs1 = interval(1000).pipe(take(3)); // Emitirá 0, 1, 2 cada 1 segundo

clicks.pipe(
  exhaustMap(() => obs1), // Primero procesará obs1
).subscribe(console.log);