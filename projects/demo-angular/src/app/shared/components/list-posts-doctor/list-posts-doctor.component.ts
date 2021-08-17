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



@Component({
  selector: 'demo-list-posts-doctor',
  templateUrl: './list-posts-doctor.component.html',
  styleUrls: ['./list-posts-doctor.component.scss']
})
export class ListPostsDoctorComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  state: Boolean = true;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['position', 'name', 'weight', 'Actions'];
  dataSource: any;

  constructor(private dt_service: DoctorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(environment.baseUrl + "doctor");
    this.List();


  }

  List() {
    this.dt_service.getAll().subscribe(
      (res: any) => {
        this.state = false
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;

        console.log(this.dataSource);

      }, (error: any) => {
        console.log(error);

      }
    )
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddDoctorComponent, {
      width: '675px',
      height: '416px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.List()
    });
  }

  updateDialog(id: number) {
    const dialogRef = this.dialog.open(UpdateDoctorComponent, {
      width: '675px',
      height: '416px',
      panelClass: 'custom-dialog-container',
      data: { data: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.List()
    });

  }


  ngAfterViewInit(): void {

  }


  delete(id: Doctor) {
    this.dt_service.delete(id).subscribe(
      (res: any) => {
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
