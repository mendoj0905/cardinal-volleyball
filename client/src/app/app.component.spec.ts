import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardinalMatModule } from './material-module';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({selector: 'cardinal-header', template: ''})
class HeaderComponent {}
@Component({selector: 'cardinal-side-nav', template: ''})
class CardinalSideNavComponent {}
@Component({selector: 'cardinal-schedule', template: ''})
class ScheduleComponent {}
@Component({selector: 'cardinal-team-standing', template: ''})
class TeamStandingComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        CardinalMatModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        CardinalSideNavComponent,
        ScheduleComponent,
        TeamStandingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
