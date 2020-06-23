import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessages } from './error-options';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorMessages: ErrorMessages;

  getClientErrorMessage(error: Error): string {
    return error.message ?
           error.message :
           error.toString();
  }

  getClientErrorStack(error: Error): string {
    return error.stack ?
           error.stack :
           error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ?
           error.message :
           this.errorMessages.F141;
  }

}
