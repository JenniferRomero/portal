import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) { }

  getEntity(idNumber: number){
    return this.http.get(ENV['endpoints']['validateEntity']);
    //return this.http.get(ENV['endpoints']['validateEntity'] + '/entities/' + idNumber);
  }
}