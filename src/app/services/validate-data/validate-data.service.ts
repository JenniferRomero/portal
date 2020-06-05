import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateDataService {

  private messageError;
  private REGEX_NUMBERS = "^[1-9][0-9]*$";

  constructor(private translate: TranslateService) { }

  public validateId(documentId):boolean {
    let result = false;
    var id = documentId;
    var regex = new RegExp(this.REGEX_NUMBERS, 'g');
    var matcher = regex.test(id);

    if(id == null){
      this.setMessageError("documentId.empty");
    } else if (id.length < 6) {
      this.setMessageError("documentId.length_min");
    } else if (id.length > 10) {
      this.setMessageError("documentId.length_max");
    } else if (!matcher) {
      this.setMessageError("documentId.regex");
    } else {
      result = true;
    }

    return result;
  }

  private setMessageError(pathMsg: string){
    let initPath = "error.validate_data";
    this.messageError = this.translate.instant(initPath + "." + pathMsg);
  }

  public getMessageError(){
    return this.messageError;
  }
}