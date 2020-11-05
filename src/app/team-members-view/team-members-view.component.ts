import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployeeData } from '../interfaces/employee';

@Component({
  selector: 'app-team-members-view',
  templateUrl: './team-members-view.component.html',
  styleUrls: ['./team-members-view.component.scss']
})
export class TeamMembersViewComponent implements OnInit {
  public employeesData: IEmployeeData[];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({data}) => this.employeesData = data);
  }

  ngOnInit(): void {

  }
}
