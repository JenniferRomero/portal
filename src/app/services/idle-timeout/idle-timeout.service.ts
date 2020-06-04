import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class IdleTimeoutService {

  private validateSession = new BehaviorSubject(false);
  stateSession = this.validateSession.asObservable();

  constructor() {}

  setValidateSession(logout: boolean) {
    this.validateSession.next(logout);
  }
}