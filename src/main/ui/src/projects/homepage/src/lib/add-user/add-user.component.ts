import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AppService} from "../../../../../app/app.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
              public appService: AppService) { }

  form = new FormGroup({
    name: new FormControl('', Validators.nullValidator && Validators.required),
    phone: new FormControl('', Validators.nullValidator && Validators.required),
    file: new FormControl(null,Validators.required)
  });


  ngOnInit() {
  }
  handleFileInput(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.patchValue({
          file: reader.result
        });

      };
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    // this.appService.addUser(this.form.value.name,this.form.value.phone,this.form.value.photo);
    // this.dialogRef.close();
  }

}
