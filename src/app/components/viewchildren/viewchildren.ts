import { Component, ElementRef, OnInit, QueryList, ViewChildren } from "@angular/core";
import { MaterialModule } from "../../material/material.module";

@Component({
    selector:'app-viewchildren',
    styleUrl:'./viewchildren.scss',
    templateUrl:'./viewchildren.html',
    imports:[MaterialModule]
})
export class ViewChildrens implements OnInit{

    @ViewChildren('getelement') elements: any = new QueryList<ElementRef>();
    
    elementArray: any[] = [];

    constructor(){

    }

    ngOnInit(): void {
        
    }

    getChildrens(){
       this.elements.forEach((el:any)=>{
          this.elementArray.push(el.nativeElement.innerHTML);
       })
    }

}