import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { FormService } from '../../services/formServices';
import { FormGroup } from '@angular/forms';
import { ReusableForms } from '../../ReusableComponents/Reusableforms/reusableForms';

@Component({
  selector: 'app-subject',
  imports: [MaterialModule, ReusableForms],
  templateUrl: './subject.html',
  styleUrl: './subject.scss',
  providers: [FormService]
})
export class subject implements OnInit {
// Subjects
  subject = new Subject();
  behaviourSubject = new BehaviorSubject('behaviour Initial value');
  asyncSubject = new AsyncSubject();
  replaySubject = new ReplaySubject(2);
  
  // Arrays for form queations
  sub: any = [];
  Bsub: any = [];
  Asub: any = [];
  Rsub: any = [];

  //FormGroups of forms
  subForm!: FormGroup;
  BsubForm!: FormGroup;
  AsubForm!: FormGroup;
  RsubForm!: FormGroup;

  // array for store data
  subdata: any = [];
  Bsubdata: any = [];
  Asubdata: any = [];
  Rsubdata: any = [];


  constructor(private formService: FormService) {
    this.formService.subform.forEach((que: any) => {
      this.sub.push(que);
    });
    this.formService.Bsubform.forEach((que: any) => {
      this.Bsub.push(que);
    });
    this.formService.Asubform.forEach((que: any) => {
      this.Asub.push(que);
    });
    this.formService.Rsubform.forEach((que: any) => {
      this.Rsub.push(que);
    });
  }


  ngOnInit(): void {
    this.subForm = new FormGroup({});
    this.BsubForm = new FormGroup({});
    this.AsubForm = new FormGroup({});
    this.RsubForm = new FormGroup({});
  }

  getSubject() {
    this.subject.subscribe((el) => {
      console.log(el);
      this.subdata.push(el)
    });
    let obj = this.subForm.getRawValue();
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      this.subject.next(value);
    });
  }

  getBehaviourSubject() {
    this.behaviourSubject.subscribe((el) => {
      console.log(el);
      this.Bsubdata.push(el)
    });
    let obj = this.BsubForm.getRawValue();
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      this.behaviourSubject.next(value);
    });
  }

  getAsyncSubject() {
    this.asyncSubject.subscribe((el) => {
      console.log(el);
      this.Asubdata.push(el)
    });
    let obj = this.AsubForm.getRawValue();
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      this.asyncSubject.next(value);
      this.asyncSubject.complete();
    }); 
  }

  getReplaySubject() {
    console.log(this.RsubForm.getRawValue());
    this.replaySubject.subscribe((el) => {
      console.log(el);
      this.Rsubdata.push(el)
    });
    let obj = this.RsubForm.getRawValue();
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      this.replaySubject.next(value);
    });
  }

}
