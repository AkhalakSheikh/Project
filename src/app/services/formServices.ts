import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FormService{

   constructor(){

   }

    reusableformqueations:any = [
    {
      label:'Enter name',
      type:'text',
      required:true,
      name : 'name'
    }
  ];

   subform = [
    {
      label:'value1',
      type:'text',
      required:true,
      name : 'value1'
    }
  ];

  Bsubform = [
    {
      label:'value1',
      type:'text',
      required:true,
      name : 'value1'
    }
  ];
  Asubform = [
    {
      label:'value1',
      type:'text',
      required:true,
      name : 'value1'
    }
  ];
  Rsubform = [
    {
      label:'value1',
      type:'text',
      required:true,
      name : 'value1'
    }
  ];

  inputform = [
    {
      label:'For input decorator',
      type: 'text',
      required: true,
      name:'input_decorator'
    }
  ];

  Outputform = [
    {
      label:'For output decorator',
      type: 'text',
      required: true,
      name:'output_decorator'
    }
  ];

}