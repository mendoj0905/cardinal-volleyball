import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'cardinal-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  data: any[];
  columnKeys: string[] = ['time', 'Team 1', 'Team 2'];
  columnHeaders = {
    'time': 'Game Time',
    'Team 1': 'Team 1',
    'Team 2': 'Team 2'
  };

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getTableData('assets/data/schedule.json')
      .subscribe(data => this.data = data);
  }

}
