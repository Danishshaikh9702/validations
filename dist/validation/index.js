"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validation {
    email(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }
    mobileNumber(mobileNumber) {
        const mobileStr = mobileNumber.toString().replace(/\s/g, '');
        const mobileRegex = /^(\+91)?\d{10}$/;
        return mobileRegex.test(mobileStr);
    }
    panCardNumber(panNumber) {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        return panRegex.test(panNumber);
    }
    httpUrl(url) {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(url);
    }
    ifscCode(ifscCode) {
        const ifscRegex = /^[A-Z]{4}[0][A-Z0-9]{6}$/;
        return ifscRegex.test(ifscCode);
    }
    drivingLicense(DLNumber) {
        let dlRegex = new RegExp(/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/);
        return dlRegex.test(DLNumber);
    }
    aadharCardNumber(aadharNumber) {
        const trimAadharNumber = aadharNumber.split(' ').join('');
        const aadharRegex = /^(\d{12})$/;
        return aadharRegex.test(trimAadharNumber);
    }
}
const validation = new Validation();
exports.default = validation;
