import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Specialty } from '../../models/Specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get(environment.baseUrl + "specialty", {})
  }

  insert(specialty: Specialty) {
    return this.http.post(environment.baseUrl + "specialty", specialty)
  }

  byId(id: number) {
    return this.http.get(environment.baseUrl + "specialty/" + id, {})
  }
  delete(id: number) {
    return this.http.delete(environment.baseUrl + "specialty/" + id, {})
  }
}
