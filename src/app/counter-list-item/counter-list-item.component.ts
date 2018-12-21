import { Counter } from '../models/counter.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ElapsedTime } from '../counter/elapsed-time.model';

@Component({
  selector: 'app-counter-list-item',
  templateUrl: './counter-list-item.component.html',
  styleUrls: ['./counter-list-item.component.css']
})
export class CounterListItemComponent  implements OnInit, OnDestroy {

  @Input() counter: Counter;

  timer;
  elapsedTime: ElapsedTime = new ElapsedTime(0, 0, 0, 0, 0, 0);

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
        this.elapsedTime = Counter.getElapsedTime(this.counter);
    }, 1000);
  }

    ngOnDestroy() {
      clearTimeout(this.timer);
    }
}
