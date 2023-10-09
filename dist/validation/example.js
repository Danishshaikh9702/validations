"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Validation class
const index_1 = __importDefault(require("./index")); // Update the import path to match your project structure
// Create an instance of the Validation class
// Example usage
const emailValid = 'example@email.com';
const emailInvalid = 'invalid-email';
console.log(`Email Validation: ${index_1.default.email(emailValid)}`); // true
console.log(`Email Validation: ${index_1.default.email(emailInvalid)}`); // false
const mobileValid1 = '+91 9702686401';
const mobileValid2 = 9702686401;
const mobileInvalid = '1234567890';
console.log(`Mobile Number Validation: ${index_1.default.mobileNumber(mobileValid1)}`); // true
console.log(`Mobile Number Validation: ${index_1.default.mobileNumber(mobileValid2)}`); // true
console.log(`Mobile Number Validation: ${index_1.default.mobileNumber(mobileInvalid)}`); // false
const panValid = 'ABCDE1234F';
const panInvalid = 'ABCD1234F'; // Missing a character
console.log(`PAN Card Validation: ${index_1.default.panCardNumber(panValid)}`); // true
console.log(`PAN Card Validation: ${index_1.default.panCardNumber(panInvalid)}`); // false
const urlValid1 = 'https://www.example.com';
const urlValid2 = 'ftp://ftp.example.com';
const urlInvalid = 'example.com'; // Missing protocol
console.log(`URL Validation: ${index_1.default.httpUrl(urlValid1)}`); // true
console.log(`URL Validation: ${index_1.default.httpUrl(urlValid2)}`); // true
console.log(`URL Validation: ${index_1.default.httpUrl(urlInvalid)}`); // false
const ifscValid = 'ABCD0123456';
const ifscInvalid = 'ABCD12345'; // Invalid length
console.log(`IFSC Code Validation: ${index_1.default.ifscCode(ifscValid)}`); // true
console.log(`IFSC Code Validation: ${index_1.default.ifscCode(ifscInvalid)}`); // false
const validDL1 = 'MH0420170056170'; // Format: "MH0420170056170"
const validDL2 = 'MH-0420170056170'; // Format: "MH-0420170056170"
const validDL3 = 'MH-04 20170056170'; // Format: "MH-04 20170056170"
const validDL4 = 'MH04 20170056170'; // Format: "MH04 20170056170"
const invalidDL = 'InvalidDL123'; // Invalid format
console.log(`Driving License Validation: ${index_1.default.drivingLicense(validDL1)}`); // true
console.log(`Driving License Validation: ${index_1.default.drivingLicense(validDL2)}`); // true
console.log(`Driving License Validation: ${index_1.default.drivingLicense(validDL3)}`); // true
console.log(`Driving License Validation: ${index_1.default.drivingLicense(validDL4)}`); // true
console.log(`Driving License Validation: ${index_1.default.drivingLicense(invalidDL)}`); // false
const aadharValid1 = '1232 1223 1123';
const aadharValid2 = '11 12 22 22 22 22';
const aadharValid3 = '123456789012';
const aadharValid4 = '1 2 3 4 5 6 7 8 9 0 1 2';
const aadharValid5 = '11222 222 222 2';
console.log(`Aadhar Card Validation: ${index_1.default.aadharCardNumber(aadharValid1)}`); // true
console.log(`Aadhar Card Validation: ${index_1.default.aadharCardNumber(aadharValid2)}`); // true
console.log(`Aadhar Card Validation: ${index_1.default.aadharCardNumber(aadharValid3)}`); // true
console.log(`Aadhar Card Validation: ${index_1.default.aadharCardNumber(aadharValid4)}`); // true
console.log(`Aadhar Card Validation: ${index_1.default.aadharCardNumber(aadharValid5)}`); // true
