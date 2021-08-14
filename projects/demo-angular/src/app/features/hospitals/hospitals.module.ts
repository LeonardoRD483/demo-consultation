import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsRoutingModule } from './hospitals-routing.module';
import { HospitalsComponent } from './hospitals.component';
import { SharedModule } from '../../shared/shared.module';
import { ListPostsComponent } from '../../shared/components/list-posts/list-posts.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    HospitalsComponent,
  ],
  imports: [
    SharedModule,
    HospitalsRoutingModule,
    AngularMaterialModule
  ]
})
export class HospitalsModule { }
