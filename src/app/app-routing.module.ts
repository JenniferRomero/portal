import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/shared.index';
import { PreloadingStrategyService } from './core/routes/preloading-strategy.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: { preload: false }
  },
  {
    path: 'validate-token',
    loadChildren: () => import('./validate-token/validate-token.module').then(m => m.ValidateTokenModule),
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
