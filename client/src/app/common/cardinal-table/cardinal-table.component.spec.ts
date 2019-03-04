import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardinalMatModule } from '../../material-module';

import { CardinalTableComponent } from './cardinal-table.component';

describe('CardinalTableComponent', () => {
  let component: CardinalTableComponent;
  let fixture: ComponentFixture<CardinalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CardinalMatModule ],
      declarations: [ CardinalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create table', () => {
    expect(component).toBeTruthy();
  });
});
