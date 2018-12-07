import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinalTableComponent } from './cardinal-table/cardinal-table.component';
import { CardinalNavButtonComponent } from './cardinal-nav-button/cardinal-nav-button.component';
import { CardinalSideNavComponent } from './cardinal-side-nav/cardinal-side-nav.component';
import { CardinalMatModule } from '../material-module';

@NgModule({
  declarations: [
    CardinalTableComponent,
    CardinalSideNavComponent,
    CardinalNavButtonComponent
  ],
  imports: [
    CommonModule,
    CardinalMatModule
  ],
  exports: [
    CardinalTableComponent,
    CardinalSideNavComponent,
    CardinalNavButtonComponent
  ]
})
export class CardinalModule { }
