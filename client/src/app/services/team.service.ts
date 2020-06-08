import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrentTeamRanking(): Observable<Team[]> {
    return this.http.get<Team[]>('assets/data/teams.json');
  }
}
