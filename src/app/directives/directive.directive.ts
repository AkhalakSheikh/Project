import { Directive, ElementRef } from "@angular/core"

@Directive({
   selector : '[CustomDirective]'
})
export class CustomDirective{

    constructor(value : ElementRef){
        return value.nativeElement.style.color = 'red';
    }

}