import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.scss']
})
export class EmployeesDetailsComponent implements OnInit {
  @Input() employees: IEmployee[];
  constructor() { }

  ngOnInit(): void {
  }

}
