
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MaterialModule } from "../../material/material.module";

@Component({
    selector: 'app-reusableForms',
    styleUrl: './reusableForms.scss',
    templateUrl: './reusableForms.html',
    imports:[
      MaterialModule
    ]
})
export class ReusableForms implements OnInit {


    @Input() form!: FormGroup;
    @Input() controls! : any;

    constructor(private fb:FormBuilder) {

    }
    ngOnInit(): void {
      if(this.controls && this.form){
        const validators = this.controls?.required ? [Validators.required] : [];
        this.form.addControl(this.controls?.name, this.fb.control('', validators));
      }
    }
}