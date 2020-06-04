import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getItemString(key: string) {
    return sessionStorage.getItem(key);
  }

  stringifyItem(key: string, item: any) {
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  setItem(key: string, item: any) {
    sessionStorage.setItem(key, item);
  }

  getItemJSON(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}