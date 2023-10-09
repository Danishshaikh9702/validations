import { ValidationInterface } from "./type";

class Validation implements ValidationInterface {
    
    email(email:string): boolean{
        const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    mobileNumber(mobileNumber: string | number): boolean{
        const mobileStr = mobileNumber.toString().replace(/\s/g, '');
        const mobileRegex = /^(\+91)?\d{10}$/;
        return mobileRegex.test(mobileStr);
    } 

    panCardNumber(panNumber:string):boolean{
        const panRegex:RegExp = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        return panRegex.test(panNumber);
    }

    httpUrl(url:string):boolean{
        const urlRegex:RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(url);      
    }

    ifscCode(ifscCode:string):boolean{
        const ifscRegex:RegExp = /^[A-Z]{4}[0][A-Z0-9]{6}$/;
        return ifscRegex.test(ifscCode);
    }

    drivingLisence(DLNumber: string): boolean{
        let dlRegex = new RegExp(/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/)
        return dlRegex.test(DLNumber);
    }

    aadharCardNumber(aadharNumber: string): boolean {
        const trimAadharNumber=aadharNumber.split(' ').join('')
        const aadharRegex = /^(\d{12})$/;
        return aadharRegex.test(trimAadharNumber);
    }  

}
const validation=new Validation()
export default validation 