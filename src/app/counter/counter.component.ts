import { CountersService } from './../counters/counters.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ElapsedTime } from './elapsed-time.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {

  id: number;
  counter: Counter = new Counter(0, '', '', new Date().getTime(), '', '');
  timer;

  constructor(private route: ActivatedRoute,
    private countersService: CountersService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);

        this.counter = this.countersService.getCounterById(this.id);

      //   this.timer = setInterval(() => {
      //     this.counter.getElapsedTime();
      //  }, 1000);
      }
    );
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
