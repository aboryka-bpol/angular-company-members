import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../models/Team.model';

@Component({
  selector: 'app-team-members-view',
  templateUrl: './team-members-view.component.html',
  styleUrls: ['./team-members-view.component.scss']
})
export class TeamMembersViewComponent implements OnInit {
  public employeesData$: Observable<Team[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.employeesData$ = this.route.data.pipe(
      map(({data}) => data)
    );
  }
}
