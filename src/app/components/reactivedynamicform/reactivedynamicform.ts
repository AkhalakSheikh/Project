import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivedynamicform',
  imports: [MaterialModule],
  templateUrl: './reactivedynamicform.html',
  styleUrl: './reactivedynamicform.scss'
})
export class Reactivedynamicform implements OnInit{

  dynamicForm : FormGroup;

  constructor(private fb:FormBuilder, private rout:Router){
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit(){
     this.dynamicForm.addControl('Name', this.fb.control('', Validators.required));
     this.dynamicForm.addControl('Sername', this.fb.control('', Validators.required));
     this.dynamicForm.addControl('Addresses', this.fb.array([this.createaddfrom()]));
  }

createaddfrom(){
  return this.fb.group({
    country: [''],
    state: [''],
    village:['']
  })
}

get addressarray(){
  return this.dynamicForm.get('Addresses') as FormArray;
}

addAddressform(){
  this.addressarray.push(this.createaddfrom());
}

remove(i:any){
  this.addressarray.removeAt(i)
}

submit(){
  if(this.dynamicForm.valid){
    console.log(this.dynamicForm.getRawValue());
  }
}

back(){
  this.rout.navigate(['./reusableForms']);
}


}
