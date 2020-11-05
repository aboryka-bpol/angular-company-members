import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/Team.model';
import { EmployeesService } from '../employees.service';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersResolverService implements Resolve<Team[]> {

  constructor(private employeeService: EmployeesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team[]> {
    return this.employeeService.getEmployees();
  }
}
