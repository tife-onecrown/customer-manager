import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICustomer } from '../interfaces/customer';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  action!: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICustomer,
    private route: ActivatedRoute,
    public dialogService: DialogService,
  ) {
  }

  ngOnInit(): void {
    this.action = this.dialogService.action
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}
