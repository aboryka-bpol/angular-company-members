import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';


@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.scss']
})
export class EmployeesDetailsComponent implements OnInit {
  @Input() employees: Employee[];
  constructor() { }

  ngOnInit(): void {
  }

}
