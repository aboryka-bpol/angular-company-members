import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IEmployeeResponse } from '../interfaces/employee';
import employeesMapper from '../mappers/employeesMapper';
import { Team } from '../models/Team.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  private URL = `${environment.API_URL}task/index.json`;

  public getEmployees(): Observable<Team[]> {
    return this.http.get<IEmployeeResponse>(this.URL).pipe(
      map(({data}) => data),
      map(employeesMapper),
      scan((acc, result) => ([
        ...acc,
        ...result.map(res => new Team().deserialize(res))
      ]))
    );
  }

}
