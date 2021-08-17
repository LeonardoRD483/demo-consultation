import { Component, OnInit } from '@angular/core';
import { AddDoctorComponent } from '../../shared/components/add-doctor/add-doctor.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DoctorComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    const dialogRef = this.dialog.open(AddDoctorComponent, {
      width: '675px',
      height: '416px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
                           
    });
  }

}
