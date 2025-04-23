import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../material/Material module';
import { CommonModule } from '@angular/common';
import { UserServices } from '../signalstore/user.store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-allusers',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.scss'
})
export class AllusersComponent implements OnInit{


  
users:any = [];

  constructor(public userservices:UserServices, private dialog: MatDialog){

  }

  ngOnInit(){

    this.users = [];

    this.userservices.userdata.subscribe((el:any)=>{
         this.users.push(el);
         this.userservices.setusercount(this.users.length);
    })

  }

  delete(index:number){
     this.users.splice(index, 1);
     this.userservices.setusercount(this.users.length);
  }


  openDialog(obj:any,i:any) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '80vw',
      height: '40vh',
      data: {
        data : obj,
      }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      const deepCopy = JSON.parse(JSON.stringify(result));
      console.log("result",result);
      this.users[i].name = result.name;
      this.users[i].email = result.email;
      this.users[i].contact = result.contact;
      this.users[i].address = result.address;
    });
  }
}

// Dialog for edit

@Component({
  selector: 'app-my-dialog',
  templateUrl: './editdialog.component.html',
  styleUrl: './allusers.component.scss',
  standalone: true,
  imports: [MaterialModule, CommonModule],
})
export class MyDialogComponent implements OnInit {
usereditform : FormGroup;
editedobj:any;

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder
  ) {
    this.usereditform = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })
  }

  ngOnInit(){
    this.usereditform.controls['name'].setValue(this.data.data.name);
    this.usereditform.controls['email'].setValue(this.data.data.email);
    this.usereditform.controls['contact'].setValue(this.data.data.contact);
    this.usereditform.controls['address'].setValue(this.data.data.address);
}

  closeDialog(){
    if(this.usereditform.valid){
      this.editedobj = {
        name:this.usereditform.controls['name'].value,
         email:this.usereditform.controls['email'].value,
         contact:this.usereditform.controls['contact'].value,
         address:this.usereditform.controls['address'].value
    }
      console.log(this.editedobj);
      this.dialogRef.close(this.editedobj);
    }else{
      console.log("All fields are mandatory!")
    }
  }
}
