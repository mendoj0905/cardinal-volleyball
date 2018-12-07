import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinalTableComponent } from './cardinal-table.component';

describe('CardinalTableComponent', () => {
  let component: CardinalTableComponent;
  let fixture: ComponentFixture<CardinalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardinalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
