import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";



@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{

    constructor(){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // return this.routservice.getCanactivate(); 
      return true; 
    } 

}