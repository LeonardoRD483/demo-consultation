import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',pathMatch: 'full' , 'redirectTo' : 'hospitals'},
  { path: 'hospitals', loadChildren: () => import('./features/hospitals/hospitals.module').then(m => m.HospitalsModule) },
  { path: 'doctor', loadChildren: () => import('./features/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient', loadChildren: () => import('./features/patient/patient.module').then(m => m.PatientModule) },
  { path: 'specialty', loadChildren: () => import('./features/specialty/specialty.module').then(m => m.SpecialtyModule) },
  { path: 'grades', loadChildren: () => import('./features/grades/grades.module').then(m => m.GradesModule) },
  { path: '**', redirectTo: 'hospitals' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
