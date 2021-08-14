import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListPostsPatientDataSource, ListPostsPatientItem } from './list-posts-patient-datasource';

@Component({
  selector: 'demo-list-posts-patient',
  templateUrl: './list-posts-patient.component.html',
  styleUrls: ['./list-posts-patient.component.scss']
})
export class ListPostsPatientComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListPostsPatientItem>;
  dataSource: ListPostsPatientDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name' , 'actions'];

  constructor() {
    this.dataSource = new ListPostsPatientDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
