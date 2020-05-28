import {NgModule} from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CameraPageComponent} from "./camera-page/camera-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [CameraPageComponent],
    imports: [MatDialogModule,
        MatFormFieldModule, ReactiveFormsModule,],
    exports: [CameraPageComponent]
})
export class CameraPageModule {
}
