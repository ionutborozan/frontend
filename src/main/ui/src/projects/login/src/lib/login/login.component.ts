import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {AppService} from "../../../../../app/app.service";

@Component({
    selector: 'body',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

    constructor(private appService: AppService,
                private router: Router) {}

    title = 'My Home Security';

    userForm = new FormGroup({
        firstName: new FormControl('', Validators.nullValidator && Validators.required),
        lastName: new FormControl('', Validators.nullValidator && Validators.required),
    });

    users: any[] = [];
    userCount = 0;

    destroy$: Subject<boolean> = new Subject<boolean>();

    onSubmit() {
        this.appService.login(this.userForm.value.firstName, this.userForm.value.firstName);
            this.userCount = this.userCount + 1;
            console.log(this.userCount);
            this.userForm.reset();
            this.router.navigate(['/homepage'])

    }



    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    ngOnInit() {
    }
}
