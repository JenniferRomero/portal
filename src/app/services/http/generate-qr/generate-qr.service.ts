import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerateQrService {

  constructor(private http: HttpClient) { }

  getQRCode(){
    const urlExample = 'https://reqres.in/api/user';
    return this.http.get(urlExample);
  }
}