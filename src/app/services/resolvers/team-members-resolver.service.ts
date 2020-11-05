import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IEmployeeData } from 'src/app/interfaces/employee';
import { EmployeesService } from '../employees.service';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersResolverService implements Resolve<IEmployeeData[]> {

  constructor(private employeeService: EmployeesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployeeData[]> {
    return this.employeeService.getEmployees();
  }
}
