
import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ReusableForms } from '../../ReusableComponents/Reusableforms/reusableForms';
import { MaterialModule } from '../../material/material.module';
import { FormService } from '../../services/formServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reusable-form-example',
  imports: [
    ReusableForms,
    MaterialModule
  ],
  templateUrl: './reusable-form-example.html',
  styleUrl: './reusable-form-example.scss'
})
export class ReusableFormExample implements OnInit{

  form! : FormGroup;
  queations:any = [];

  constructor(private formService: FormService, private rout :Router){
      formService.reusableformqueations.forEach((queation:any) => {
         this.queations.push(queation);
      });
  }

  ngOnInit(): void {
     this.form = new FormGroup({});
  }

  submit(){
    console.log(this.form.controls['name'].value);
  }

  gotodynamic(){
    this.rout.navigate(['./Dynamicform'])
  }

}
