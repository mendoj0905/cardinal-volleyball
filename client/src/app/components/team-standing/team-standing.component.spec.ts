import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStandingComponent } from './team-standing.component';
import { TeamService } from 'src/app/services/team.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const teamServiceStub = {
  getCurrentTeamRanking() { return of({}); }
};

describe('TeamStandingComponent', () => {
  let component: TeamStandingComponent;
  let fixture: ComponentFixture<TeamStandingComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TeamStandingComponent ],
      providers: [ {provide: TeamService, useValue: teamServiceStub}],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create team standing component', () => {
    expect(component).toBeTruthy();
  });
});
