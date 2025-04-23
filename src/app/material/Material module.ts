import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from"@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
    imports:[
     ReactiveFormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatButtonModule,
     MatCardModule,
     MatDialogModule
    ],
    exports:[
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule{

}