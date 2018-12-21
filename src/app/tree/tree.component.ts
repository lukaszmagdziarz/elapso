import { TreeService } from './tree.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Leaf} from '../leaf/leaf.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})

export class TreeComponent implements OnInit {

  dataFetched: Subject<boolean>;
  leafs: Leaf[] = [];
  totalPrice: number;

  constructor(private treeService: TreeService) {
  }

  ngOnInit() {
    this.getLeafs();

    this.totalPrice = 0;
  }

  onItemAdded(event: Leaf) {
    this.totalPrice += event.price;
  }

  onItemRemoved(event: Leaf) {
    this.totalPrice -= event.price;
  }


  saveLeafs() {
    this.treeService.onSaveLeafs(this.leafs).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: Response) => {
        console.log(error);
      }
    );
  }

  getLeafs() {
    this.treeService.onGetLeafs().subscribe(
      (leafs: Leaf []) => {
        this.leafs = leafs;
      },
      (error: Response) => {
        console.log(error);
      }
    );
  }
}
