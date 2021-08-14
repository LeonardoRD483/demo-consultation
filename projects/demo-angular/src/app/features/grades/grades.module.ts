import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    GradesComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    AngularMaterialModule
  ]
})
export class GradesModule { }
