import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {NotificationPageComponent} from "./notification-page/notification-page.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./header/header.component";

@NgModule({
    declarations: [NotificationPageComponent, HeaderComponent,],
    imports: [
        MatTableModule,
        CommonModule
    ],
    exports: [NotificationPageComponent, HeaderComponent,]
})
export class NotificationPageModule {
}
