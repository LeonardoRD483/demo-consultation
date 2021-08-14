import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SharedModule } from '../../shared/shared.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    SharedModule,
    PatientRoutingModule,
    AngularMaterialModule
  ]
})
export class PatientModule { }
