import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

constructor() { }

numberToArray(n: number): number[] {
  return [...Array(n)];
}

}
