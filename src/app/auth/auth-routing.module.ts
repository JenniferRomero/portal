import { NgModule } from '@angular/core';
import { RoutingPath } from '../configs/routing-path';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent, RegisterComponent } from './pages/pages.index';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: RoutingPath.appRouting.auth.pages.login.path,
        pathMatch: 'full'
      },
      {
        path: RoutingPath.appRouting.auth.pages.login.path,
        component: LoginComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.auth.pages.login.breadcrumb
        }
      },
      {
        path: RoutingPath.appRouting.auth.pages.register.path,
        component: RegisterComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.auth.pages.register.breadcrumb
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }