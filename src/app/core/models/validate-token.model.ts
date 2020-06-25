export class ValidateToken {
    constructor(
        public idProcess: number,
        public identificationNumber: string,
        public channel: string,
        public processType: string,
        public token: string
    ) { }
}