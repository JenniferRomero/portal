import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValidateToken } from 'src/app/core/models/validate-token.model';
import { environment as ENV } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenService {

  constructor(private http: HttpClient) { }

  validateToken(validateToken: ValidateToken ){
    return this.http.post(ENV["endpoints"]["validateToken"], validateToken);
  }
}