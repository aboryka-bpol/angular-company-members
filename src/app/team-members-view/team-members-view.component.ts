import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../models/Team.model';

@Component({
  selector: 'app-team-members-view',
  templateUrl: './team-members-view.component.html',
  styleUrls: ['./team-members-view.component.scss']
})
export class TeamMembersViewComponent implements OnInit {
  public employeesData$ = new BehaviorSubject<Team[]>([]);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({data}) => this.employeesData$.next(data));
  }
}
