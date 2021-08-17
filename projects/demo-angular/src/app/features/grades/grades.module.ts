import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    GradesComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class GradesModule { }
