import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/shared.index';
import { PreloadingStrategyService } from './core/routes/preloading-strategy.service';

const appRoutes: Routes = [
  /*{
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },*/
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: { preload: false }
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: true,
    enableTracing: false,
    preloadingStrategy: PreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
