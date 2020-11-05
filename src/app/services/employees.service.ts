import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployeeData } from '../interfaces/employee';
import { environment } from '../../environments/environment';
import employeesMapper from '../mappers/employeesMapper';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  private URL = `${environment.API_URL}task/index.json`;

  public getEmployees(): Observable<IEmployeeData[]> {
    return this.http.get<any>(this.URL).pipe(
      map(employeesMapper)
    );
  }


}
