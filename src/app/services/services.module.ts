import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EncryptionService,
  IdleTimeoutService,
  LocalStorageService,
  SessionStorageService,
  ErrorMessages,
  ErrorStages,
  ErrorTypes
} from './services.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EncryptionService,
    IdleTimeoutService,
    LocalStorageService,
    SessionStorageService,
    ErrorMessages,
    ErrorTypes,
    ErrorStages
  ],
  declarations: []
})
export class ServicesModule { }
