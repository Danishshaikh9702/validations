// Import the Validation class
import {validation}  from './index'; // Update the import path to match your project structure

// Create an instance of the Validation class

// Example usage
const emailValid = 'example@email.com';
const emailInvalid = 'invalid-email';

console.log(`Email Validation: ${validation.email(emailValid)}`); // true
console.log(`Email Validation: ${validation.email(emailInvalid)}`); // false

const mobileValid1 = '+91 9702686401';
const mobileValid2 = 9702686401;
const mobileInvalid = '1234567890';

console.log(`Mobile Number Validation: ${validation.mobileNumber(mobileValid1)}`); // true
console.log(`Mobile Number Validation: ${validation.mobileNumber(mobileValid2)}`); // true
console.log(`Mobile Number Validation: ${validation.mobileNumber(mobileInvalid)}`); // false

const panValid = 'ABCDE1234F';
const panInvalid = 'ABCD1234F'; // Missing a character

console.log(`PAN Card Validation: ${validation.panCardNumber(panValid)}`); // true
console.log(`PAN Card Validation: ${validation.panCardNumber(panInvalid)}`); // false

const urlValid1 = 'https://www.example.com';
const urlValid2 = 'ftp://ftp.example.com';
const urlInvalid = 'example.com'; // Missing protocol

console.log(`URL Validation: ${validation.httpUrl(urlValid1)}`); // true
console.log(`URL Validation: ${validation.httpUrl(urlValid2)}`); // true
console.log(`URL Validation: ${validation.httpUrl(urlInvalid)}`); // false

const ifscValid = 'ABCD0123456';
const ifscInvalid = 'ABCD12345'; // Invalid length

console.log(`IFSC Code Validation: ${validation.ifscCode(ifscValid)}`); // true
console.log(`IFSC Code Validation: ${validation.ifscCode(ifscInvalid)}`); // false

const validDL1: string = 'MH0420170056170'; // Format: "MH0420170056170"
const validDL2: string = 'MH-0420170056170'; // Format: "MH-0420170056170"
const validDL3: string = 'MH-04 20170056170'; // Format: "MH-04 20170056170"
const validDL4: string = 'MH04 20170056170';  // Format: "MH04 20170056170"
const invalidDL: string = 'InvalidDL123'; // Invalid format

console.log(`Driving License Validation: ${validation.drivingLicense (validDL1)}`); // true
console.log(`Driving License Validation: ${validation.drivingLicense (validDL2)}`); // true
console.log(`Driving License Validation: ${validation.drivingLicense (validDL3)}`); // true
console.log(`Driving License Validation: ${validation.drivingLicense (validDL4)}`); // true
console.log(`Driving License Validation: ${validation.drivingLicense (invalidDL)}`); // false

const aadharValid1 = '1232 1223 1123';
const aadharValid2 = '11 12 22 22 22 22';
const aadharValid3 = '123456789012';
const aadharValid4 = '1 2 3 4 5 6 7 8 9 0 1 2';
const aadharValid5 = '11222 222 222 2';

console.log(`Aadhar Card Validation: ${validation.aadharCardNumber(aadharValid1)}`); // true
console.log(`Aadhar Card Validation: ${validation.aadharCardNumber(aadharValid2)}`); // true
console.log(`Aadhar Card Validation: ${validation.aadharCardNumber(aadharValid3)}`); // true
console.log(`Aadhar Card Validation: ${validation.aadharCardNumber(aadharValid4)}`); // true
console.log(`Aadhar Card Validation: ${validation.aadharCardNumber(aadharValid5)}`); // true
