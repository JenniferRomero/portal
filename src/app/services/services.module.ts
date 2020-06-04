import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  EncryptionService,
  IdleTimeoutService,
  LocalStorageService,
  SessionStorageService
} from './services.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EncryptionService,
    IdleTimeoutService,
    LocalStorageService,
    SessionStorageService
  ],
  declarations: []
})
export class ServicesModule { }