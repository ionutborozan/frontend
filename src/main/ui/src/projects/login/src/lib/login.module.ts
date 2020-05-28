import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppModule} from "../../../../app/app.module";
import {NotificationPageModule} from "../../../notification-page/src/lib/notification-page.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AppModule,
        NotificationPageModule
    ],
    exports: [LoginComponent]
})
export class LoginModule {
}
