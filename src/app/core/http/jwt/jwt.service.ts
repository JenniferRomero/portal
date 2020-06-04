import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { appConfig } from '../../../configs/app-config';
import { LocalStorageService } from '../../../services/services.index';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private _jwtHelper: JwtHelperService,
              private _localStorageService: LocalStorageService) { }

  /**
   * This function return the json web token - JWT
   * @returns String - token stored in the localstorage
   */
  getJwtLocalStorage():string {
    return this._localStorageService.getItemString(appConfig.token_name_jwt);
  }

  /**
   * This function will store the json web token - JWT
   * @param token - token JWT
   * @returns Void - returns nothing
   */
  setJwtLocalStorage(token: string):void {
    this._localStorageService.setItem(appConfig.token_name_jwt, token);
  }

  /**
   * This function will remove the json web token - JWT
   * @returns Void - returns nothing
   */
  removeJwtLocalStorage():void {
    this._localStorageService.removeItem(appConfig.token_name_jwt);
  }

  /**
   * This function return JWT decode
   * @returns Json - returns the token with its native structure
   */
  getDecodeToken(): any /* Must be a data model */ {
    return this._jwtHelper.decodeToken(this.getJwtLocalStorage());
  }

  getTokenExpirationDate():Date {
    return this._jwtHelper.getTokenExpirationDate(this.getJwtLocalStorage());
  }

  isTokenExpired():boolean {
    return this._jwtHelper.isTokenExpired(this.getJwtLocalStorage());
  }
}