import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardinal-table',
  templateUrl: './cardinal-table.component.html',
  styleUrls: ['./cardinal-table.component.scss']
})
export class CardinalTableComponent implements OnInit {

  @Input() title: string;
  @Input() displayColumns: string[];
  @Input() columnHeaders: any;
  @Input() data: any[];

  dataSource: any[];

  constructor() { }

  ngOnInit() { }

}
