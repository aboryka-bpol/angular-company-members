import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee: IEmployee;
  @Input() imageSize: string;
  @Input() imageContainerClass: string;
  constructor() { }

  ngOnInit(): void {
  }

}
