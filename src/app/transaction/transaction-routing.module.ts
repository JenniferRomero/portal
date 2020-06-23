import { NgModule } from '@angular/core';
import { RoutingPath } from '../configs/routing-path';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { ValidateComponent, ErrorComponent } from './pages/pages.index';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: [
      {
        path: '',
        redirectTo: RoutingPath.appRouting.transaction.pages.error.path,
        pathMatch: 'full'
      },
      {
        path: RoutingPath.appRouting.transaction.pages.validate.path,
        component: ValidateComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.transaction.pages.validate.breadcrumb
        }
      },
      {
        path: RoutingPath.appRouting.transaction.pages.error.path,
        component: ErrorComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.transaction.pages.error.breadcrumb
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