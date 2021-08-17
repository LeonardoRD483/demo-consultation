import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../../models/Client';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';
import Swal from 'sweetalert2'
import { isDataSource } from '@angular/cdk/collections';
@Component({
  selector: 'demo-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UpdateDoctorComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private cl_service: DoctorService,
  ) { }

  ngOnInit(): void {
    console.log(this.data.data)
    this.List()
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

  List() {
    this.cl_service.byId(this.data.data).subscribe(
      (res: any) => {
        console.log(res.data.client.id);
        this.fb_doctor.get('name')!.setValue(res.data.client.name)
        this.fb_doctor.get('last_name')!.setValue(res.data.client.last_name)
        this.fb_doctor.get('direction')!.setValue(res.data.client.direction)

      }, err => {
        console.log(err);

      }

    )
  }


  saveClient() {
    /* this.fb_doctor.get('name')!.value
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
         }, (err: any) => {
           console.log(err);
         }
       )
       console.log(this.fb_doctor.get('name')!.value)
     }*/
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    })
    this.dialogRef.close();

  }




}
