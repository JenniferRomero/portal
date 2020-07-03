export interface ResponseSuccess {
    code: string,
    message: string,
    type: string,
    data: Entity,
    traceId: string
}

interface Entity {
    name: string,
    identificationNumber: string,
    expirationDate: Date,
    contactName: string,
    contactEmail: string,
    ipAddress: string
}