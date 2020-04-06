import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable, of } from 'rxjs';
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
    const source = timer(1000, 2000);
    const personObs: Observable<Person> = of(person);
    personObs.subscribe(data=>console.log(data));
    const subscribe = source.subscribe(val => console.log(val));
    setTimeout(() => { subscribe.unsubscribe(); }, 10000);
  }
}
