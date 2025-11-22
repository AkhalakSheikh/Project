import { Component, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-rxjs-operators',
  imports: [MaterialModule],
  templateUrl: './rxjs-operators.html',
  styleUrl: './rxjs-operators.scss'
})
export class RxjsOperators implements OnInit {
  mapcount = signal(1);
  filtercount = signal(1);

  arr: any = [];
  maparr: any = [];
  filterarr: any = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= 100; i++) {
      this.arr.push(i);
    }
  }

  getdata(key: string, value: string) {
    switch (key) {
      case 'map':
        if (value == '+') {
          this.mapcount.update(value => value + 1);
          this.maparr = [];
          this.maparr = this.arr.map((val: any) => {
            if (val % this.mapcount() == 0) {
              return val;
            } else {

            }
          });
        } else if (value == '-') {
          this.mapcount.update(value => value - 1);
          this.maparr = [];
          this.maparr = this.arr.map((val: any) => {
            if (val % this.mapcount() == 0) {
              return val;
            } else {

            }
          });
        }
        break;
      case 'filter':
        if (value == '+') {
          this.filtercount.update(value => value + 1);
          this.filterarr = [];
          this.filterarr = this.arr.filter((val: any) => {
            if (val % this.filtercount() == 0) {
              return val;
            }
          });
        } else if (value == '-') {
          this.filtercount.update(value => value - 1);
          this.filterarr = [];
          this.filterarr = this.arr.filter((val: any) => {
            if (val % this.filtercount() == 0) {
              return val;
            }
          });
        }
        break;

    }
  }



}
