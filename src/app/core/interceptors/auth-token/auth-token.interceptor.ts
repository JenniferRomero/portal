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

  constructor(private _jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this._jwtService.getAccessToken();

    /*const headers = new HttpHeaders({
      'access-token': this._jwtService.getJwtLocalStorage()
    });*/

    //const reqClone = req.clone({ headers });

    //return next.handle(reqClone).pipe(catchError(this.manageError));
    console.log("Interceptor...");
    return next.handle(req);
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