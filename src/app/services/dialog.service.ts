import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ICustomer } from '../interfaces/customer';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  action!: string


  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  openDialog(data: ICustomer): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: data,
    });


    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('/customers');
    });
  }
}
