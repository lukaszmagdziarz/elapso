import { Image } from './../models/image.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CountersService } from './counters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

   counters: {}[];
   images: AngularFireList<Image>;

  constructor(private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private countersService: CountersService) { }

  ngOnInit() {
    this.getCounters();
  }

  getCounters(): void {
  {
     this.db.list('/counters', ref => ref.orderByChild('id')).valueChanges().subscribe(
       (counters) => {
         this.counters = counters.reverse();
       });
  }
  }
}
