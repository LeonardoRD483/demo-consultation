import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Hospital } from '../../models/Hospital';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.baseUrl + "hospital", {})
  }

  insert(hospital: Hospital) {
    return this.http.post(environment.baseUrl + "hospital", hospital)
  }

  byId(id: number) {
    return this.http.get(environment.baseUrl + "hospital/" + id, {})
  }
  delete(id: number) {
    return this.http.delete(environment.baseUrl + "hospital/" + id, {})
  }
}
