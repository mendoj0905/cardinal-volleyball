import { Component, OnInit } from '@angular/core';

interface NavButton {
  label: string;
  icon?: string;
}

@Component({
  selector: 'cardinal-side-nav',
  templateUrl: './cardinal-side-nav.component.html',
  styleUrls: ['./cardinal-side-nav.component.scss']
})
export class CardinalSideNavComponent implements OnInit {

  navigation: NavButton[];

  constructor() { }

  ngOnInit() {

    this.navigation = [
      {
        label: 'Home',
        icon: 'home'
      },
      {
        label: 'Schedule',
        icon: 'date_range'
      },
      {
        label: 'Team Standings',
        icon: 'view_headline'
      },
      {
        label: 'Teams',
        icon: 'supervisor_account'
      },
      {
        label: 'Player Registration',
        icon: 'perm_identity'
      },
      {
        label: 'Photo Gallery',
        icon: 'camera_alt'
      },
      {
        label: 'About',
        icon: 'view_column'
      }
    ];

  }

}
