import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

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
}