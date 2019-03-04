import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { ApiService } from 'src/app/services/api.service';

const apiServiceStub = {
  getTableData() { return of({ season: 'Fall', year: '2019'}); }
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ { provide: ApiService, useValue: apiServiceStub } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should display current season for Cardinal League', () => {

  });
});
