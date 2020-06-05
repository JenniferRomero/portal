import { Component } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { TranslateService } from '@ngx-translate/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { environment as ENV } from '../../src/environments/environment';
import { IdleTimeoutService, ValidateDataService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timedOut = false;
  langs = ['es', 'en'];
  lastPing?: Date = null;
  idleState = 'Not started.';

  constructor(private translate: TranslateService, public _idle: Idle, public _keepalive: Keepalive, public _idleTimeoutService: IdleTimeoutService, public _validateDataService: ValidateDataService) {
    this.idleTimeout();

    if(!_validateDataService.validateId("1312e12032039")){
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
  }

  public useLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }

  idleTimeout() {
    this._idleTimeoutService.stateSession.subscribe(stateSession => {
      if(stateSession){
        this._idle.setIdle(5);
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
}