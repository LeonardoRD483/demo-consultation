import { Component, OnInit } from '@angular/core';
import { AddSpecialtyComponent } from '../../shared/components/add-specialty/add-specialty.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpecialtyComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(){
    const dialogRef = this.dialog.open(AddSpecialtyComponent, {
      width: '675px',
      height: '316px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
   
    });
  }

}
