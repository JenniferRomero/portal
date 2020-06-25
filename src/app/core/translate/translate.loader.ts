import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpClientTrans extends HttpClient {
  constructor(handler: HttpBackend) {
    super(handler);
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}