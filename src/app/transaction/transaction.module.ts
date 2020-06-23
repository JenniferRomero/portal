import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';

import {
  ValidateComponent,
  ErrorComponent
} from './pages/pages.index';

@NgModule({
  declarations: [
    TransactionComponent,
    ValidateComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }