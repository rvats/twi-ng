import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable, of, from } from 'rxjs';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  public title: string = 'twi';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    const person: Person = {
      name: 'Rahul Vats',
    };

    // of is used to create an observable from Data
    // signature: of(...values, scheduler: Scheduler): Observable
    // Emit variable amount of values in a sequence and then emits a complete notification.
    const personObs: Observable<Person> = of(person);
    personObs.subscribe(data=>console.log(data));

    // from is used to create an observable from Promise
    // signature: from(ish: ObservableInput, mapFn: function, thisArg: any, scheduler: Scheduler): Observable
    // Turn an array, promise, or iterable into an observable.
    // This operator can be used to convert a promise to an observable!
    // For arrays and iterables, all contained values will be emitted as a sequence!
    // This operator can also be used to emit a string as a sequence of characters!
    const personPromise: Promise<Person> = Promise.resolve(person);
    const personPromiseObs: Observable<Person> = from(personPromise);
    personObs.subscribe(data=>console.log(data));
  }
}
