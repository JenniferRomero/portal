import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment';
import { GenerateQr } from 'src/app/core/models/generate-qr.model';

@Injectable({
  providedIn: 'root'
})
export class GenerateQrService {

  constructor(private http: HttpClient) { }

  getQRCode(generateQr: GenerateQr) {
    return this.http.post(ENV['endpoints']['generateQR'], generateQr);
  }
}