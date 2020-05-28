import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'lib-camera-page',
    templateUrl: './camera-page.component.html',
    styleUrls: ['./camera-page.component.css']
})
export class CameraPageComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<CameraPageComponent>) {
    }

    form = new FormGroup({
        password: new FormControl('', Validators.nullValidator && Validators.required),
    });

    ngOnInit() {
    }

    save() {

    }

    close() {
        this.dialogRef.close();
    }

}
