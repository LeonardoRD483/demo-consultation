import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Patient } from '../../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.baseUrl + "patient", {})
  }


  insert(client: Patient) {
    return this.http.post(environment.baseUrl + "patient", client)
  }

  delete(id: Patient) {
    return this.http.delete(environment.baseUrl + "patient/" + id, {})
  }

  byId(id: Patient){
    return this.http.get(environment.baseUrl + "patient/" + id , {})
  }
}
