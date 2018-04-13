import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-deletion-dialog',
  templateUrl: './deletion-dialog.component.html',
  styleUrls: ['./deletion-dialog.component.css']
})
export class DeletionDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeletionDialogComponent>) { }

  ngOnInit() {
  }

  confirm()
  {
    this.dialogRef.close("yes");
    
  }



}
