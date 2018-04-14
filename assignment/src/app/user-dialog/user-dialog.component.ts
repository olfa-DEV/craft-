import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

    form: FormGroup;
    editedUser:any;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        name: this.data.name,
        username: this.data.username,
        email: this.data.email
      })
  }

  submit(form) {
    this.editedUser= {
        "col1":{"name": `${form.value.name}`, "username": `${form.value.username}`,"email":`${form.value.email}`}
    };
    this.dialogRef.close(this.editedUser);
  }

 
}
