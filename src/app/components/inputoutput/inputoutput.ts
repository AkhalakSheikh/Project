import { Component, OnInit } from '@angular/core';
import { Child } from './child/child';
import { MaterialModule } from '../../material/material.module';
import { ReusableForms } from '../../ReusableComponents/Reusableforms/reusableForms';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/formServices';

@Component({
  selector: 'app-inputoutput',
  imports: [MaterialModule, Child, ReusableForms],
  templateUrl: './inputoutput.html',
  styleUrl: './inputoutput.scss'
})
export class Inputoutput implements OnInit{
 
  inputform!: FormGroup;
  queations : any = [];

  valueforchild:any;
  valuefromchild:any;

  constructor(private formService:FormService){
    this.formService.inputform.forEach((el:any)=>{
      this.queations.push(el);
    });
  }

  ngOnInit(): void {
   this.inputform = new FormGroup({});
  }

  send(){
   this.valueforchild = this.inputform.controls['input_decorator'].value;
  }

  getfromchild(event:Event){
  this.valuefromchild = event;
  }

}
