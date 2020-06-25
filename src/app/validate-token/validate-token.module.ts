import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ValidateTokenComponent } from './validate-token.component';
import { TransactionRoutingModule } from './validate-token-routing.module';

import {
  ValidateComponent,
  ErrorComponent
} from './pages/pages.index';

import { IdCVtStateComponent } from './components/id-c-vt-state/id-c-vt-state.component';
import { IdCVtHeaderComponent } from './components/id-c-vt-header/id-c-vt-header.component';
import { IdCVtFooterComponent } from './components/id-c-vt-footer/id-c-vt-footer.component';

@NgModule({
  declarations: [
    ValidateTokenComponent,
    ValidateComponent,
    ErrorComponent,
    IdCVtHeaderComponent,
    IdCVtFooterComponent,
    IdCVtStateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TransactionRoutingModule
  ]
})
export class ValidateTokenModule { }