import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'lib-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private router: Router) {
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

}
