export class ErrorGlobal extends Error {
    name: string;
    message: string;
    type: string;
    stage: string;
    httpStatus?: number = 404;
    applicationStatus?: number;
    errorMessageTranslationkey: string;
    handled: boolean = false;

    constructor(type?: string, stage?: string, message?: string) {
      super(message);
      this.name = ErrorGlobal.name;
      this.type = type;
      this.stage = stage;
      Object.setPrototypeOf(this, ErrorGlobal.prototype);
    }
}
