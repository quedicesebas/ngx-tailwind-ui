import { Injectable } from '@angular/core';
import { ParsedPhoneNumber, parsePhoneNumber } from 'awesome-phonenumber';

@Injectable({
  providedIn: 'root',
})
export class NgxPhonenumbersService {
  constructor() {}

  validate(
    phoneText: string,
    countryCode: string,
    defaultCountryCode?: string
  ): ParsedPhoneNumber {
    var parsedPhone = this.parse(phoneText, countryCode);
    if (!parsedPhone.valid && !countryCode) {
      parsedPhone = this.parse('+' + phoneText, countryCode);
    }
    if (!parsedPhone.valid && defaultCountryCode) {
      parsedPhone = this.parse(phoneText, defaultCountryCode);
    }
    return parsedPhone;
  }

  parse(phoneText: string, countryCode: string): ParsedPhoneNumber {
    phoneText = phoneText.trim();
    countryCode = countryCode.trim().replace('+', '');
    return parsePhoneNumber(
      phoneText.startsWith('+')
        ? phoneText
        : countryCode
        ? '+' + countryCode + phoneText
        : phoneText
    );
  }
}
