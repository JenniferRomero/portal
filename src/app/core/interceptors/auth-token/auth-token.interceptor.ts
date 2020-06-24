import { Injectable } from '@angular/core';
import { from as fromPromise } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { JwtService } from '../../http/jwt/jwt.service';
import { environment as ENV } from '../../../../environments/environment';

import { 
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  accessToken = null;

  constructor(private _jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.headers.get("Skip")){
      return next.handle(req);
    }

    return fromPromise(this.handleAccess(req, next));
  }

  private async handleAccess(req: HttpRequest<any>, next: HttpHandler){

    let request = req;
    let api_key = ENV['keys']['apiKey'];
    let accessToken = await this.getAccessToken();

    const headers = new HttpHeaders({
      "x-api-key": api_key,
      "Autentication": "Bearer " + accessToken
    });
    
    request = req.clone({headers});

    return next.handle(request).toPromise();
  }

  getAccessToken(){
    return new Promise((resolve) => {
      this._jwtService.getAccessToken().subscribe(data => {
        if(data['access_token']){
          resolve(data['access_token']);
        }
      });
    });
  }

  manageError(error: HttpErrorResponse) {
    return throwError(error);
  }
}

export const AuthTokenProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthTokenInterceptor,
  multi: true
};