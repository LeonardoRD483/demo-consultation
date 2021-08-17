import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Doctor } from '../../models/doctor';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/Client';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(public htt: HttpClient) { }


  getAll() {
    console.log(environment.baseUrl + "doctor");

    return this.htt.get(environment.baseUrl + "doctor", {})
  }

  insert(doctor: Doctor) {
    return this.htt.post(environment.baseUrl + "doctor", doctor)
  }


  insert_Client(client: Client) {
    return this.htt.post(environment.baseUrl + "client", client)
  }

  byId(id: Doctor) {
    return this.htt.get(environment.baseUrl + "doctor/" + id, {})
  }

  delete(id: Doctor) {
    return this.htt.delete(environment.baseUrl + "doctor/" + id, {})
  }

}
