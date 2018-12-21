import { Http, Response } from '@angular/http';
import { Counter } from '../models/counter.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  counters: Counter[];

  constructor(private http: Http) {}

  // onGetCounters() {
  //   return this.http.get('https://lukasz-playground.firebaseio.com/counters.json')
  //     .pipe(map(
        
  //       (response: Response) => {
  //         const data = response.json();

  //         for (let i = 0; i < data.length; i++) {
  //           if (!data[i].id) {
  //             setTimeout(() => {
  //               data[i].id = Date.now();
  //             }, 1);
  //           }
  //           if (!data[i].imageUrl) {
  //             data[i].imageUrl = 'https://firebasestorage.googleapis.com/v0/b/lukasz-playground.appspot.com/o/lukasz.magdziarz%40onet.eu-12719476_504491759737598_1235430040724086777_o.jpg?alt=media&amp;token=2dc41288-7f43-4bf3-8954-3102d240d1ba';
  //           }
  //         }

  //         this.counters = data;
  //         return data;
  //       }
  //     ));
  // }

  onSaveCounters(counters: Counter[]) {
    return this.http.put('https://lukasz-playground.firebaseio.com/counters.json', counters);
  }

  getCounterById(id: number) {
    return this.counters.filter(c => c.id === id)[0];
  }
}
