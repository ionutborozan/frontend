import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {NotificationPageComponent} from "./notification-page/notification-page.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [NotificationPageComponent],
    imports: [
        MatTableModule,
        CommonModule
    ],
    exports: [NotificationPageComponent]
})
export class NotificationPageModule {
}
