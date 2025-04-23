import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AllusersComponent } from './allusers/allusers.component';
import { UserchartsComponent } from './usercharts/usercharts.component';
import { MaterialModule } from './material/Material module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdduserComponent, AllusersComponent, MaterialModule,UserchartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'project';
}
