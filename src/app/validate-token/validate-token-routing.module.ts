import { NgModule } from '@angular/core';
import { RoutingPath } from '../configs/routing-path';
import { Routes, RouterModule } from '@angular/router';

import { ValidateTokenComponent } from './validate-token.component';
import { ValidateComponent, ErrorComponent } from './pages/pages.index';

const routes: Routes = [
  {
    path: '',
    component: ValidateTokenComponent,
    children: [
      {
        path: '',
        redirectTo: RoutingPath.appRouting.validateToken.pages.error.path,
        pathMatch: 'full'
      },
      {
        path: RoutingPath.appRouting.validateToken.pages.validate.path,
        component: ValidateComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.validateToken.pages.validate.breadcrumb
        }
      },
      {
        path: RoutingPath.appRouting.validateToken.pages.error.path,
        component: ErrorComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.validateToken.pages.error.breadcrumb
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }