import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { JwtService } from '../../http/jwt/jwt.service';

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

  constructor(private _jwtService: JwtService) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.headers.get("Skip")){
      return next.handle(req);
    }

    this._jwtService.getAccessToken().subscribe(data => {
      let accessToken = data['access_token'];
  
      const headers = new HttpHeaders({
        'access-token': accessToken
      });
  
      const reqClone = req.clone({ headers });
  
      //return next.handle(reqClone).pipe(catchError(this.manageError));
      return next.handle(req);
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