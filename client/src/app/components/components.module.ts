import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { TeamStandingComponent } from './team-standing/team-standing.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CardinalModule } from '../common/cardinal.module';
import { CardinalMatModule } from '../material-module';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    ScheduleComponent,
    TeamStandingComponent
  ],
  imports: [
    CommonModule,
    CardinalModule,
    CardinalMatModule
  ],
  exports: [
    HeaderComponent,
    ScheduleComponent,
    TeamStandingComponent
  ]
})
export class ComponentsModule { }
