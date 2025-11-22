import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-child',
  imports: [MaterialModule],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child implements OnInit{

  value:string = '';

  constructor(){

  }

  ngOnInit(): void {
    
  }

  callfromparent(){
    this.value = 'Function Called from Parent using ViewChild';
  }

}
