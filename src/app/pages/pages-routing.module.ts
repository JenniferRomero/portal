import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { RoutingPath } from '../configs/routing-path';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent, ProfileComponent } from './modules/modules.index';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: RoutingPath.appRouting.pages.modules.dashboard.path,
        pathMatch: 'full'
      },
      {
        path: RoutingPath.appRouting.pages.modules.dashboard.path,
        component: DashboardComponent,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          breadcrumb: RoutingPath.appRouting.pages.modules.dashboard.breadcrumb
        }
      },
      {
        path: RoutingPath.appRouting.pages.modules.profile.path,
        component: ProfileComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.pages.modules.profile.breadcrumb
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
