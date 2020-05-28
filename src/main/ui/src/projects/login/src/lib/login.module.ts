import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppModule} from "../../../../app/app.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AppModule
    ],
    exports: [LoginComponent]
})
export class LoginModule {
}
