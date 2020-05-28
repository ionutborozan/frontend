import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "./app.service";
import {AddUserComponent} from "../projects/homepage/src/lib/add-user/add-user.component";
import {MatDialog} from "@angular/material/dialog";
import {CameraPageComponent} from "../projects/camera-page/src/lib/camera-page/camera-page.component";


@Component({
    selector: 'lib-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private router: Router,
                private appService: AppService,
                private dialog: MatDialog  ) {
    }

    ngOnInit() {
    }

    navigateToCamera() {
        this.router.navigate(['/camera']);
    }

    navigateToUserDetails() {
        this.router.navigate(['/user-details']);
    }

    navigateToNotification() {
        this.router.navigate(['/notification']);
    }
    logout() {
        this.appService.logout('ionut','ade');
        this.router.navigate(['']);

    }
    addUser() {
        this.dialog.open(AddUserComponent);
        // this.router.navigate(['/add-user']);

    }

    doNothing() {

    }
    changeInPassword() {
        this.dialog.open(CameraPageComponent);
    }

}
