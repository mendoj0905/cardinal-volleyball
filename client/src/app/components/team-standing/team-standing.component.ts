import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models';

@Component({
  selector: 'cardinal-team-standing',
  templateUrl: './team-standing.component.html',
  styleUrls: ['./team-standing.component.scss']
})
export class TeamStandingComponent implements OnInit {

  rankData: Team[];
  columnKeys: string[] = ['name', 'wins', 'loses'];
  columnHeaders = {
    name: 'Team Name',
    wins: 'Wins',
    loses: 'Loses'
  };

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teamService.getCurrentTeamRanking()
      .subscribe(team => {
        this.rankData = team;
      });
  }

}
