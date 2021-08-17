import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../environments/environment';
import { DoctorService } from '../../services/doctor/doctor.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from '../update-doctor/update-doctor.component';
import { Doctor } from '../../models/doctor';
import Swal from 'sweetalert2'
import { AddSpecialtyComponent } from '../add-specialty/add-specialty.component';
import { SpecialtyService } from '../../services/specialty/specialty.service';
import { Specialty } from '../../models/Specialty';
import { UpdateSpecialtyComponent } from '../update-specialty/update-specialty.component';
import { GradeService } from '../../services/grade/grade.service';
import { AddGradeComponent } from '../add-grade/add-grade.component';

@Component({
  selector: 'demo-list-posts-grade',
  templateUrl: './list-posts-grade.component.html',
  styleUrls: ['./list-posts-grade.component.scss']
})
export class ListPostsGradeComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  state: Boolean = true;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['position', 'name', 'user', 'Actions'];
  dataSource: any;

  constructor(private dt_service: GradeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(environment.baseUrl + "doctor");
    this.List();
  }

  List() {
    this.dt_service.getAll().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.state = false;
        console.log(this.dataSource);

      }, (error: any) => {
        console.log(error);

      }
    )
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      width: '675px',
      height: '316px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.List()
    });
  }

  updateDialog(id: number) {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    })
    /* const dialogRef = this.dialog.open(UpdateSpecialtyComponent, {
       width: '675px',
       height: '316px',
       panelClass: 'custom-dialog-container',
       data: { data: id }
     });
 
     dialogRef.afterClosed().subscribe(result => {
       this.List()
     });*/

  }


  ngAfterViewInit(): void {

  }


  delete(id: number) {
    console.log();

    this.dt_service.delete(id).subscribe(
      (res: any) => {
        console.log(res);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.List()
      }, (err: any) => {
        console.log(err);

      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
