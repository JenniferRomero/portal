import { Component } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { IdleTimeoutService } from './services/services.index';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { environment as ENV } from '../../src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timedOut = false;
  lastPing?: Date = null;
  idleState = 'Not started.';

  constructor(public _idle: Idle, public _keepalive: Keepalive, public _idleTimeoutService: IdleTimeoutService) {
    this.idleTimeout();
  }

  ngOnInit() {}

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