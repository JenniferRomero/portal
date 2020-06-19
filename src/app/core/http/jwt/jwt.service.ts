import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../../configs/app-config';
import { SessionStorageService } from '../../../services/services.index';
import { environment as ENV } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private _sessionStorageService: SessionStorageService, private http: HttpClient) { }

  /**
   * This function get the json web token - JWT
   */
  getAccessToken() {
    let username = ENV['keys']['username'];
    let password = ENV['keys']['password'];
    let urlAccessToken = ENV['endpoints']['accessToken'];
    let requestUrl = urlAccessToken + '?grant_type=client_credentials';

    const headers = {
      "Skip": "true",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": 'Basic ' + btoa(username + ':' + password)
    }

    return this.http.post(requestUrl, null, { headers });
  }

  /**
   * This function return the json web token - JWT
   * @returns String - token stored in the localstorage
   */
  getJwtSessionStorage():string {
    return this._sessionStorageService.getItemString(appConfig.token_name_jwt);
  }

  /**
   * This function will store the json web token - JWT
   * @param token - token JWT
   * @returns Void - returns nothing
   */
  setJwtSessionStorage(token: string):void {
    this._sessionStorageService.setItem(appConfig.token_name_jwt, token);
  }

  /**
   * This function will remove the json web token - JWT
   * @returns Void - returns nothing
   */
  removeJwtSessionStorage():void {
    this._sessionStorageService.removeItem(appConfig.token_name_jwt);
  }
}