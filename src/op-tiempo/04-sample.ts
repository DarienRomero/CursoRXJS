//Emite el interval siempre que se haga click
import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
)
.subscribe(console.log)