import { EventEmitter, Injectable } from "@angular/core";
import { createAction, createReducer, on, props, Store } from "@ngrx/store";
import { Observable,take } from "rxjs";


export const setUsers = createAction('[User] Set Users', props<{ users: any[] }>());

export const userReducer = createReducer<any[]>(
  [],
  on(setUsers, (state, { users }) => [...users])
);

@Injectable({
    providedIn:'root'
})
export class UserServices {

    userdata:EventEmitter<any> = new EventEmitter<any>();
    userdatacount:EventEmitter<any> = new EventEmitter<any>();
    users!: Observable<any[]>;
    subscription: any;
    usercount:any;
    data:any;
    newUsers:any;
    
    constructor(private store: Store<{ user: any[] }>){
    }

 setloadUsers(obj:any) {
    const users = [obj];
    this.store.dispatch(setUsers({ users }));
    
    this.store.select('user').pipe(take(1)).subscribe(currentUsers => {
      if (JSON.stringify(currentUsers) !== JSON.stringify(this.newUsers)) {
        this.newUsers = currentUsers;
        this.store.dispatch(setUsers({ users: this.newUsers }));
        this.userdata.emit(JSON.parse(JSON.stringify(currentUsers[0])));
      }
    });
  }

  setusercount(Value:any){
   this.userdatacount.emit(Value);
  }

}