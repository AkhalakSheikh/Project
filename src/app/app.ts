import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonPipe } from './Pipes/custom.pipe';
import { CustomDirective } from './directives/directive.directive';
import { MaterialModule } from './material/material.module';
import { FormService } from './services/formServices';
import { AuthGuard } from './guards/authguard';
// import { RoutService } from './services/routservice';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule, MaterialModule, CommonPipe, CustomDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers:[FormService, AuthGuard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class App implements OnInit{

  name = 'App works';
  paths = [
    'reusableForms',
    'signals',
    'subject',
    'inputoutput',
    'viewchild',
    'viewchildren',
    'canactivated',
    'Rxjs Operators'
  ]
  routflags=[
    'CanActivate'
  ]
  constructor(private rout: Router){
    
  }

  ngOnInit(): void {
    
  
  }

  navigatetopath(path:string){
    this.rout.navigate(['./' + path]);
  }

  update(event:boolean){
    // console.log(event);
    // this.routservice.setCanactivate(event);
  }

  
}
