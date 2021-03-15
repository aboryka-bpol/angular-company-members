import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';
import { TeamService } from '../services/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeamResolverService implements Resolve<Team[]> {

  constructor(private teamService: TeamService) { }
  resolve(): Observable<Team[]> {
    return this.teamService.getTeam();
  }
}
