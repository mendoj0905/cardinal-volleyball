import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'cardinal-nav-button',
  templateUrl: './cardinal-nav-button.component.html',
  styleUrls: ['./cardinal-nav-button.component.scss']
})
export class CardinalNavButtonComponent {

  @Input() label: string;
  @Input() icon: string;
  @Output() route: string;

}
