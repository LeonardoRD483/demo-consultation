import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialtyRoutingModule } from './specialty-routing.module';
import { SpecialtyComponent } from './specialty.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SpecialtyComponent
  ],
  imports: [
    CommonModule,
    SpecialtyRoutingModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class SpecialtyModule { }
