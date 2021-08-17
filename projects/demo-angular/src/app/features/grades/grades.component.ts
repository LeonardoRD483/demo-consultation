import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddGradeComponent } from '../../shared/components/add-grade/add-grade.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GradesComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    const dialogRef = this.dialog.open(AddGradeComponent, {
      width: '675px',
      height: '316px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
   
    });
  }

}
