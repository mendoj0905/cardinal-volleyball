import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Season } from 'src/app/models';

@Component({
  selector: 'cardinal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  season: string;
  year: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getTableData('assets/data/season.json')
      .subscribe((data: Season) => {
        this.season = data.season;
        this.year = data.year;
      });
  }

}
