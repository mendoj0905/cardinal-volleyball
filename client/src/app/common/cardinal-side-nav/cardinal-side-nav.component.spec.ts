import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinalSideNavComponent } from './cardinal-side-nav.component';

describe('CardinalSideNavComponent', () => {
  let component: CardinalSideNavComponent;
  let fixture: ComponentFixture<CardinalSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardinalSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinalSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
