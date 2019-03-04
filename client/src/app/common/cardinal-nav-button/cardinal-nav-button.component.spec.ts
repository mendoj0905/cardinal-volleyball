import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinalMatModule } from '../../material-module';
import { CardinalNavButtonComponent } from './cardinal-nav-button.component';

describe('CardinalNavButtonComponent', () => {
  let component: CardinalNavButtonComponent;
  let fixture: ComponentFixture<CardinalNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CardinalMatModule ],
      declarations: [ CardinalNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinalNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create nav button', () => {
    expect(component).toBeTruthy();
  });
});
