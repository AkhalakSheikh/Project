import { Routes } from '@angular/router';
import { App } from './app';
import { ReusableFormExample } from './components/reusable-form-example/reusable-form-example';
import { Signals } from './components/signals/signals';
import { subject } from './components/subject/subject';
import { AuthGuard } from './guards/authguard';

export const routes: Routes = [
    {path:'home', component: App},
    { path: '', redirectTo: 'reusableForms', pathMatch:'full' }, 
    {path:'reusableForms', loadComponent:()=> import('./components/reusable-form-example/reusable-form-example').then(c=> c.ReusableFormExample)},
    { path : 'signals', loadComponent:()=> import('./components/signals/signals').then(c=> c.Signals)},
    {path:'subject', loadComponent:()=> import('./components/subject/subject').then(c=> c.subject)},
    {path:'inputoutput', loadComponent:()=> import('./components/inputoutput/inputoutput').then(c=> c.Inputoutput)},
    {path:'viewchild', loadComponent:()=> import('./components/viewchild/viewchild').then(c=> c.Viewchild)},
    {path:'viewchildren', loadComponent:()=> import('./components/viewchildren/viewchildren').then(c=> c.ViewChildrens)},
    {path:'canactivated', loadComponent:()=> import('./components/canactivated/canactivated').then(c=> c.Canactivated), canActivate:[AuthGuard]},
    {path : 'Dynamicform', loadComponent:()=> import('./components/reactivedynamicform/reactivedynamicform').then(c=> c.Reactivedynamicform)},
    {path:'Rxjs Operators', loadComponent:()=> import('./components/rxjs-operators/rxjs-operators').then(c=> c.RxjsOperators)}
];
