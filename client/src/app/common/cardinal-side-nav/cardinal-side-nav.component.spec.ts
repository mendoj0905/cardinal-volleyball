import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CardinalSideNavComponent } from './cardinal-side-nav.component';

@Component({selector: 'cardinal-nav-button', template: ''})
class CardinalNavButtonComponent {
  @Input() label;
  @Input() icon;
}

describe('CardinalSideNavComponent', () => {
  let component: CardinalSideNavComponent;
  let fixture: ComponentFixture<CardinalSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardinalSideNavComponent,
        CardinalNavButtonComponent
      ]
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
