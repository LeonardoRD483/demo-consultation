import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    SharedModule,
    DoctorRoutingModule,
    AngularMaterialModule
  ]
})
export class DoctorModule { }
