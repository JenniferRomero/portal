import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenerateQr } from 'src/app/core/models/generate-qr.model';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateQrService {

  constructor(private http: HttpClient) { }

  getQRCode(generateQr: GenerateQr ) {
    // const urlExample = 'https://reqres.in/api/user';
    // return this.http.get(urlExample);
    return this.http.post(ENV['endpoints']['generateQR'], generateQr);
  }
}
