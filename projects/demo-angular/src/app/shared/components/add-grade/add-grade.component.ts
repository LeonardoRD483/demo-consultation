import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../../models/Client';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';
import Swal from 'sweetalert2'
import { PatientService } from '../../services/patient/patient.service';
import { Specialty } from '../../models/Specialty';
import { SpecialtyService } from '../../services/specialty/specialty.service';
import { Grade } from '../../models/Grade';
import { GradeService } from '../../services/grade/grade.service';

@Component({
  selector: 'demo-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, private cl_service: GradeService,
    private pt_service: PatientService
  ) { }
  selectedValue: string = "";
  selectedCar: string = "";
  cars: any[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' }
  ];
  ngOnInit(): void {
    this.listPatient()
  }

  fb_doctor: FormGroup = this.fb.group({
    name: [''],
    patient: ['']

  })

  listPatient() {
    this.pt_service.getAll().subscribe(
      (res: any) => {
        this.cars = res.data
        console.log(this.cars);
        
        console.log(res);
      }, (err: any) => {
        console.log(err);

      }
    )
  }
  onValidation() {
    if (!this.fb_doctor.valid) {
      return;
    }
  }
  onClose(): void {
    this.dialogRef.close();
  }


  cancel() {
    this.dialogRef.close();

  }


  saveClient() {
    this.fb_doctor.get('name')!.value
    let errorName = this.fb_doctor.controls['name'].valid;
    console.log(errorName);
    if (errorName == true) {
      let obj: Grade = {
        description: this.fb_doctor.get('name')!.value,
        patient : this.fb_doctor.get('patient')!.value
      }
      console.log(obj)
      this.cl_service.insert(obj).subscribe(
        (res: any) => {
          console.log(res.data.id);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        }, (err: any) => {
          console.log(err);
        }
      )
      console.log(this.fb_doctor.get('name')!.value)
    }

  }

  savePrueba() {
    console.log(this.fb_doctor.get('name')!.value)
  }


}
