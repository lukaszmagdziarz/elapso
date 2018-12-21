import { Injectable } from '@angular/core';

import { Leaf } from './../leaf/leaf.model';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private leafs: Leaf[] = [];

  constructor(private http: Http) {}

  onGetLeafs() {
    return this.http.get('https://lukasz-playground.firebaseio.com/data.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          this.leafs = data;
          return data;
        }
      ));
  }

  onSaveLeafs(leafs: Leaf[]) {
    return this.http.put('https://lukasz-playground.firebaseio.com/data.json', leafs);
  }
}
