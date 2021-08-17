import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../../models/Client';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';
import Swal from 'sweetalert2'
import { PatientService } from '../../services/patient/patient.service';

@Component({
  selector: 'demo-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, private cl_service: DoctorService,
    private pt_service : PatientService
    ) { }
  
    ngOnInit(): void {
    }
  
    fb_doctor: FormGroup = this.fb.group({
      name: [''],
      last_name: [''],
      date: [''],
      direction: [''],
      photo: ['']
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
      let errorLast_name = this.fb_doctor.controls['last_name'].valid;
      console.log(errorName);
      console.log(errorLast_name);
      if (errorName == true && errorLast_name == true) {
        let obj: Client = {
          name: this.fb_doctor.get('name')!.value,
          last_name: this.fb_doctor.get('last_name')!.value,
          direction: this.fb_doctor.get('direction')!.value
        }
        console.log(obj)
        this.cl_service.insert_Client(obj).subscribe(
          (res: any) => {
            console.log(res.data.id);
            this.saveDoctor(res.data.id)
          }, (err: any) => {
            console.log(err);
          }
        )
        console.log(this.fb_doctor.get('name')!.value)
      }
  
    }
  
  
    saveDoctor(id: number) {
      let obj : Doctor = {
        "client" : id
      }
      this.pt_service.insert(obj).subscribe(
        (res: any) => {
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
    }

}
