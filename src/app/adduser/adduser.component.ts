import { Component, Injectable, OnInit } from '@angular/core';
import { MaterialModule } from '../material/Material module';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServices } from '../signalstore/user.store';



@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss',
  providers:[]
})
export class AdduserComponent implements OnInit{

  userform : FormGroup;


  constructor(private fb:FormBuilder, private userservice:UserServices){
    this.userform = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  ngOnInit(){
    
  }

  loadUsers() {
   

    if(this.userform.valid){
    let name = this.userform.controls['name'].value;
    let Email = this.userform.controls['email'].value;
    let cont = this.userform.controls['contact'].value;
    let addr = this.userform.controls['address'].value;

    const obj = {name:name,email:Email,contact:cont,address:addr};
    this.userservice.setloadUsers(obj);
    this.userform.reset();

    }else{
      window.alert("Please fill mandatory fields!")
    }
    
  }

}

