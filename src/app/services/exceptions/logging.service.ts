import { Injectable,  } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

  constructor(private _logger: NGXLogger, private toastr: ToastrService) { }

    logError(type: string, stage: string, message: string, stack: string) {

        // INFO, DEBUG, WARNING, ERROR, FATAL_ERROR.
        switch (type) {
          case 'FATAL_ERROR':
            this._logger.fatal('AppWeb', stage, 'ID', message, stack);
            break;
          case 'ERROR':
            this._logger.error('AppWeb', stage, 'ID', message, stack);
            break;
          case 'WARNING':
            this._logger.warn('AppWeb', stage, 'ID', message, stack);
            break;
          case 'DEBUG':
            this._logger.debug('AppWeb', stage, 'ID', message, stack);
            break;
          case 'INFO':
            this._logger.info('AppWeb', stage, 'ID', message, stack);
            break;
          default:
            break;
      }
        this.showError(type, message);
    }

    showError(type: string, message: string) {
      switch (type) {
        case 'FATAL_ERROR':
        case 'ERROR':
          this.toastr.error(message, 'Error');
          break;
        case 'WARNING':
          this.toastr.warning(message, 'Advertencia');
          break;
        case 'DEBUG':
          this.toastr.info(message, 'Verificar');
          break;
        case 'INFO':
          this.toastr.info(message, 'Verificar');
          break;
        default:
          break;
    }
  }
}
