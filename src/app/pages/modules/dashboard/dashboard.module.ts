import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IdCCarouselComponent } from './components/id-c-carousel/id-c-carousel.component';
import { IdCUserComponent } from './components/id-c-user/id-c-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IdCCarouselComponent,
    IdCUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
