import { ArraysService } from './../shared/arrays.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import {Leaf} from './leaf.model';


@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.css']
})
export class LeafComponent implements OnInit {

  @Input() leaf: Leaf;
  @Input() indent: Number;

  @Output() itemAdd = new EventEmitter<Leaf>();
  @Output() itemRemove = new EventEmitter<Leaf>();

  faCollapsed = faAngleDown;
  faExpanded = faAngleUp;
  faItem = faAngleRight;

  subLeafs: Leaf[] = [];

  isExpanded: Boolean = false;
  isAdded: Boolean = false;

  constructor(private arraysService: ArraysService) {   }

  ngOnInit() {
  }

  onClick() {
    if (this.isExpanded) {
      this.subLeafs = [];
      this.isExpanded = false;
    } else {
      if (this.leaf.leafs && this.leaf.leafs.length > 0) {
        this.subLeafs = this.leaf.leafs;
      }
      this.isExpanded = true;
    }
  }

  onItemAdd(leaf: Leaf) {
    this.itemAdd.emit(leaf);
    this.isAdded = true;
  }

  onItemRemove(leaf: Leaf) {
    this.itemRemove.emit(leaf);
    this.isAdded = false;
  }
}
