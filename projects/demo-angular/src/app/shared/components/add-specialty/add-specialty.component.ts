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

@Component({
  selector: 'demo-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.scss']
})
export class AddSpecialtyComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, private cl_service: SpecialtyService,
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
  }

  fb_doctor: FormGroup = this.fb.group({
    name: [''],
   
  })

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
      let obj: Specialty = {
        name: this.fb_doctor.get('name')!.value,
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
