import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage.component";
import {LoginComponent} from "../projects/login/src/lib/login/login.component";
import {CameraPageComponent} from "../projects/camera-page/src/lib/camera-page.component";
import {NotificationPageComponent} from "../projects/notification-page/src/lib/notification-page/notification-page.component";
import {UserPageComponent} from "../projects/user-page/src/lib/user-page/user-page.component";
import {AddUserComponent} from "../projects/homepage/src/lib/add-user/add-user.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'camera', component: CameraPageComponent},
  {path: 'user-details', component: UserPageComponent},
  {path: 'notification', component: NotificationPageComponent},
  {path: 'add-user',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
