import { Keepalive } from '@ng-idle/keepalive';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Component, ErrorHandler } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { ErrorGlobal } from './services/exceptions/error-global';
import { LoggingService } from './services/exceptions/logging.service';
import { environment as ENV } from '../../src/environments/environment';
import { IdleTimeoutService, ValidateDataService, GenerateQrService } from './services/services.index';
import { ErrorMessages, ErrorStages, ErrorTypes } from './services/exceptions/error-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ErrorMessages, ErrorTypes, ErrorStages]
})
export class AppComponent {

  timedOut = false;
  langs = ['es', 'en'];
  lastPing?: Date = null;
  idleState = 'Not started.';

  constructor(
    public _idle: Idle, 
    private http: HttpClient, 
    public _keepalive: Keepalive, 
    public errorTypes: ErrorTypes,
    public _logger: LoggingService,
    public errorStages: ErrorStages, 
    public errorMessages: ErrorMessages, 
    private translate: TranslateService, 
    public _generateQrService: GenerateQrService, 
    public _idleTimeoutService: IdleTimeoutService, 
    public _validateDataService: ValidateDataService) {

    this.idleTimeout();

    if(!_validateDataService.validateId("1020806419")){
      console.log(_validateDataService.getMessageError());
    }

    if(!_validateDataService.validateIdType("CC")){
      console.log(_validateDataService.getMessageError());
    }
  }

  ngOnInit(): void {

    let browserlang = this.translate.getBrowserLang();
    if (this.langs.indexOf(browserlang) > -1) {
      this.translate.setDefaultLang(browserlang);
    } else {
      this.translate.setDefaultLang('es');
    }

    /*this._generateQrService.getQRCode().subscribe(resp => {
      console.log(resp);
    });*/
  }

  useLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }

  idleTimeout() {
    this._idleTimeoutService.stateSession.subscribe(stateSession => {
      if(stateSession){
        this._idle.setIdle(1);
        this._idle.setTimeout(ENV['time']['timeSession']);
        this._idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        this._idle.onIdleEnd.subscribe(() => {
          this.idleState = 'No longer idle.'
          console.log(this.idleState);
          this.reset();
        });

        this._idle.onTimeout.subscribe(() => {
          this.idleState = 'Timed out!';
          this.timedOut = true;
          console.log(this.idleState);
          //this.router.navigate(['/']);
        });

        this._idle.onIdleStart.subscribe(() => {
          this.idleState = 'You\'ve gone idle!'
          console.log(this.idleState);
          //this.childModal.show();
        });

        this._idle.onTimeoutWarning.subscribe((countdown) => {
          this.idleState = 'You will time out in ' + countdown + ' seconds!'
          console.log(this.idleState);
        });

        this._keepalive.interval(15);
        this._keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.reset();
      }
    });
  }

  reset() {
		this._idle.watch();
		this.idleState = 'Started.';
		this.timedOut = false;
  }

  throwError() {
    throw new ErrorGlobal(this.errorTypes.ERROR, this.errorStages.QR, this.errorMessages.F143);
  }

  throwHttpError() {
    this.http.get('urlhere').subscribe();
  }
}
