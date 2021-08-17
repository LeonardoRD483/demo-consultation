import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddHospitalComponent } from '../../shared/components/add-hospital/add-hospital.component';

@Component({
  selector: 'demo-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddHospitalComponent, {
      width: '675px',
      height: '316px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
