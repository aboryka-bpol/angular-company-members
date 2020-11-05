import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee: Employee;
  @Input() imageSize: string;
  @Input() imageContainerClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
