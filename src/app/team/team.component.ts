import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from './models/Team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public team$: Observable<Team[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.team$ = this.route.data.pipe(
      map(({data}) => data)
    );
  }
}
