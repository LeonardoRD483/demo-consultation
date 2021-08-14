import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListPostsDoctorDataSource, ListPostsDoctorItem } from './list-posts-doctor-datasource';

@Component({
  selector: 'demo-list-posts-doctor',
  templateUrl: './list-posts-doctor.component.html',
  styleUrls: ['./list-posts-doctor.component.scss']
})
export class ListPostsDoctorComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListPostsDoctorItem>;
  dataSource: ListPostsDoctorDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name' , 'actions'];

  constructor() {
    this.dataSource = new ListPostsDoctorDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
