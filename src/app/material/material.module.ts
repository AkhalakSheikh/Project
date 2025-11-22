import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports:[
       MatButtonModule,
       MatIconModule,
       CommonModule,
       MatCardModule,
       MatSidenavModule,
       ReactiveFormsModule,
       MatFormFieldModule,
       MatInputModule,
       MatSlideToggleModule,
       MatCheckboxModule
    ],
    exports:[
       MatButtonModule,
       MatIconModule,
       CommonModule,
       MatCardModule,
       MatSidenavModule,
       ReactiveFormsModule,
       MatFormFieldModule,
       MatInputModule,
       MatSlideToggleModule,
       MatCheckboxModule
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MaterialModule{

}