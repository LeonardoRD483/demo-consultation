import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ListPostsDoctorComponent } from './components/list-posts-doctor/list-posts-doctor.component';
import { ListPostsPatientComponent } from './components/list-posts-patient/list-posts-patient.component';
import { ListPostsSpecialtyComponent } from './components/list-posts-specialty/list-posts-specialty.component';



@NgModule({
  declarations: [
    ListPostsComponent,
    ListPostsDoctorComponent,
    ListPostsPatientComponent,
    ListPostsSpecialtyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    AngularMaterialModule
  ],
  exports: [
    ListPostsComponent,
    ListPostsDoctorComponent,
    ListPostsPatientComponent,
    ListPostsSpecialtyComponent
  ]
})
export class SharedModule { }
