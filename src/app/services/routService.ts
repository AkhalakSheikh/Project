import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class RoutService{

// canActivateflag = signal(false);
    
setCanactivate(flag:any){
//  this.canActivateflag.update(flag);
localStorage.setItem('canActivateflag', flag);
}

// getCanactivate(){
// return this.canActivateflag();
// }

}