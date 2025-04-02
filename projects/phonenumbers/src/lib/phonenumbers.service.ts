import { Injectable } from '@angular/core';
import { ParsedPhoneNumber, parsePhoneNumber } from 'awesome-phonenumber';

@Injectable({
  providedIn: 'root',
})
export class TauiPhonenumbersService {
  constructor() {}

  /**
   * Tries to parse the provided phone number as received with an optional country code (ignored if phone number starts with a '+'). If that fails, tries to parse it by adding a '+' at the beginning. If that fails, tries to parse it with the default country code. If everything fails, returns the original phone number parse result.
   * @param phoneNumber
   * @param countryCode
   * @param defaultCountryCode
   * @returns ParsedPhoneNumber
   */
  parseWithDefaultCountry(
    phoneNumber: string,
    countryCode?: string,
    defaultCountryCode?: string
  ): ParsedPhoneNumber {
    return this.parse(
      phoneNumber,
      phoneNumber.startsWith('+')
        ? undefined
        : countryCode ?? defaultCountryCode
    );
  }

  /**
   * Parses a phone number using the awesome-phonenumber library (a JavaScript wrapper for Google libphonenumber). Ignores the country code when the phone number starts with a '+'.
   * @param phoneNumber
   * @param countryCode
   * @returns ParsedPhoneNumber
   */
  parse(phoneNumber: string, countryCode?: string): ParsedPhoneNumber {
    phoneNumber = phoneNumber.trim();
    return parsePhoneNumber(
      phoneNumber.startsWith('+') || !countryCode
        ? phoneNumber
        : '+' + countryCode.trim().replace('+', '') + phoneNumber
    );
  }
}
