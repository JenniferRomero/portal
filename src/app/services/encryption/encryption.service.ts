import ecc from 'eccjs';
import { Injectable } from '@angular/core';
import { environment as ENV} from '../../../environments/environment';

@Injectable()
export class EncryptionService {

  _masterEncrypt = ENV['keys']['backend_keys']['masterEncrypt'];
  _masterDecrypt = ENV['keys']['backend_keys']['masterDecrypt'];

  constructor() { }

  /**
   * This function encrypts the data
   * @param value - String or array
   * @returns Json - Data encrypted in the eccjs algorithm 
   */
  getValueEncrypt(value: any):object {
    return JSON.parse(ecc.encrypt(this._masterEncrypt, JSON.stringify(value)));
  }

  /**
   * This function encrypts the data
   * @param value - String or array
   * @returns String - Data encrypted in the eccjs algorithm 
   */
  getValueEncryptString(value: any):string {
    return ecc.encrypt(this._masterEncrypt, JSON.stringify(value));
  }

  /**
   * This function decrypts the data
   * @param encryptInfo - Encrypted data string with the server's public key
   * @returns String - Data decrypted in the eccjs algorithm 
   */
  decryptData(encryptInfo: any):any {
    return new Promise((resolve, reject) => {
      try {
        resolve(ecc.decrypt(this._masterDecrypt, JSON.stringify(encryptInfo)));
      } catch (e) {
        reject(e);
      }
    });
  }
}