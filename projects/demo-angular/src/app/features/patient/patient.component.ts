import { Component, OnInit } from '@angular/core';
import { AddPatientComponent } from '../../shared/components/add-patient/add-patient.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    const dialogRef = this.dialog.open(AddPatientComponent, {
      width: '675px',
      height: '316px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
   
    });
  }

}
