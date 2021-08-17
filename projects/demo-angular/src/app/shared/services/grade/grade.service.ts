import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Grade } from '../../models/Grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.baseUrl + "consultation", {})
  }

  insert(grade: Grade) {
    return this.http.post(environment.baseUrl + "consultation", grade)
  }

  byId(id: number) {
    return this.http.get(environment.baseUrl + "consultation/" + id, {})
  }

  delete(id: number) {
    return this.http.delete(environment.baseUrl + "consultation/" + id, {})
  }
}
