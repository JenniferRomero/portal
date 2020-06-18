import { Injectable } from '@angular/core';
import { appConfig } from '../../../configs/app-config';
import { LocalStorageService } from '../../../services/services.index';
import { environment as ENV } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private _localStorageService: LocalStorageService) { }

  getAccessToken(){
    let urlAccessToken = ENV['endpoints']['accessToken'];
  }

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
}