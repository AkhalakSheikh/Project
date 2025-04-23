import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { userReducer } from './app/signalstore/user.store';
import { provideAnimations } from '@angular/platform-browser/animations';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
      ...(appConfig.providers || []), 
      provideAnimations(), // 👈 FIXES the animation error
    provideStore({ user: userReducer })
    ]
  }).catch((err) => console.error(err));

