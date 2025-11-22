import { Component, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-signals',
  imports: [MaterialModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss'
})
export class Signals implements OnInit{

  count = signal(0);

  ngOnInit(): void {
    
  }

  increment(){
    this.count.update(value => value + 1)
  }

  decrement(){
    this.count.update(value => value - 1)
  }

}
