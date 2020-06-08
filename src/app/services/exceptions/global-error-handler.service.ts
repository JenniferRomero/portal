import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { ErrorTypes, ErrorMessages } from './error-options';
import { ErrorGlobal } from './error-global';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector, public errorMessages: ErrorMessages, public errorTypes: ErrorTypes) { }

  handleError(error: ErrorGlobal | HttpErrorResponse ) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);

    let message;
    let stackTrace;

    if (error instanceof HttpErrorResponse) { // Server error
      message = errorService.getServerErrorMessage(error);
      stackTrace = error.message;
      logger.logError(this.errorTypes.ERROR, this.errorMessages.F142, message, stackTrace);
    } else if (error instanceof Error) {  // Client Error
      message = errorService.getClientErrorMessage(error);
      stackTrace = errorService.getClientErrorStack(error);
      logger.logError(error.type, error.stage, message, stackTrace);
    }
  }


}
