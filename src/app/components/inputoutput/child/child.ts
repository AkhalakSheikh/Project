import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { ReusableForms } from '../../../ReusableComponents/Reusableforms/reusableForms';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../../services/formServices';

@Component({
  selector: 'app-child',
  imports: [MaterialModule, ReusableForms],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child implements OnInit{

  outputform!: FormGroup;
  queations : any = [];
  @Input() valuefromparent: any;
  @Output() valueforparent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formService: FormService){
    formService.Outputform.forEach((el:any)=>{
      this.queations.push(el);
    })
  }

  ngOnInit(): void {
    this.outputform = new FormGroup({})
  }

  send(){
    this.valueforparent.emit(this.outputform.controls['output_decorator'].value);
  }

}
