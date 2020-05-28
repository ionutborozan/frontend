import {NgModule} from '@angular/core';
import {HomepageComponent} from "./homepage/homepage.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [HomepageComponent,AddUserComponent],
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule
    ],
    exports: [HomepageComponent,AddUserComponent]
})
export class HomepageModule {
}
