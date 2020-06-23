import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateTokenComponent } from './validate-token.component';
import { TransactionRoutingModule } from './validate-token-routing.module';

import {
  ValidateComponent,
  ErrorComponent
} from './pages/pages.index';

@NgModule({
  declarations: [
    ValidateTokenComponent,
    ValidateComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class ValidateTokenModule { }