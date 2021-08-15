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
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddSpecialtyComponent } from './components/add-specialty/add-specialty.component';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import { UpdateHospitalComponent } from './components/update-hospital/update-hospital.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { UpdateGradeComponent } from './components/update-grade/update-grade.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { UpdateSpecialtyComponent } from './components/update-specialty/update-specialty.component';



@NgModule({
  declarations: [
    ListPostsComponent,
    ListPostsDoctorComponent,
    ListPostsPatientComponent,
    ListPostsSpecialtyComponent,
    AddHospitalComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AddSpecialtyComponent,
    AddGradeComponent,
    UpdateHospitalComponent,
    UpdateDoctorComponent,
    UpdateGradeComponent,
    UpdatePatientComponent,
    UpdateSpecialtyComponent
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
