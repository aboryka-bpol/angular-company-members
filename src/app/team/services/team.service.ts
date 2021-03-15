import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ITeamResponse } from '../interfaces/team-members';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  private URL = `${environment.API_URL}task/index.json`;

  public getTeam(): Observable<Team[]> {
    return this.http.get<any>(this.URL).pipe(
      map((result: ITeamResponse) => result.data.map(res => new Team(res.attributes)))
    );
  }

}
