export interface ValidationInterface {
    email(email: string): boolean;
    mobileNumber(mobileNumber: string | number): boolean;
    panCardNumber(panNumber: string): boolean;
    httpUrl(url: string): boolean;
    ifscCode(ifscCode: string): boolean;
    drivingLicense(DLNumber: string): boolean;
    aadharCardNumber(aadharNumber: string): boolean;
  }