import { fromEvent, interval } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';

// Simulamos dos observables que emiten en intervalos de tiempo diferentes
const clicks = fromEvent(document, 'click');
const obs1 = interval(1000).pipe(take(3)); // Emitirá 0, 1, 2 cada 1 segundo

clicks.pipe(
  concatMap(() => obs1), // Primero procesará obs1
).subscribe(console.log);