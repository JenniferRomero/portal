import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';

import {
  LoginComponent,
  RegisterComponent
} from './pages/pages.index';

@NgModule({
  declarations: [
    TransactionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }