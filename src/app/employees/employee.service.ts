import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get("https://reqres.in/api/users") // TODO: Load data from backend service
  }
}
