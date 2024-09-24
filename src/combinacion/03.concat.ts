//Emite los valores de los observables de manera secuencial

import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  interval$.pipe(take(1)),
  of(5)
).subscribe(console.log)