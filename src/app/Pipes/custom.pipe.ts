import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custom'
})
export class CommonPipe implements PipeTransform{

    constructor(){

    }

    transform(value: any, ...args: any[]) {
        return value.toUpperCase();
    }

}