import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    EmployeesDetailsComponent,
    EmployeeDetailsComponent,
  ],
  exports: [
    EmployeesDetailsComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
