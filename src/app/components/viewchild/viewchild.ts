import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Child } from './child/child';

@Component({
  selector: 'app-viewchild',
  imports: [MaterialModule, Child],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.scss'
})
export class Viewchild implements OnInit{

  @ViewChild('child') ChildComponent!: Child;

  constructor(){}

  ngOnInit(): void {
    
  }

  callchildfunction(){
     this.ChildComponent.callfromparent();
  }

}
