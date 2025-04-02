import { Directive, inject, input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { TauiPhonenumbersService } from './phonenumbers.service';

@Directive({
  selector: '[phonenumber]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TauiPhonenumbersDirective,
      multi: true,
    },
  ],
})
export class TauiPhonenumbersDirective implements Validator {
  // Services
  private readonly phoneNumberValidationService = inject(
    TauiPhonenumbersService
  );

  readonly countryCodeControl = input<FormControl>();
  readonly defaultCountryCode = input<string>();

  validate(control: AbstractControl): ValidationErrors | null {
    return phoneNumberValidator(
      this.phoneNumberValidationService,
      this.countryCodeControl(),
      this.defaultCountryCode()
    )(control);
  }
}

/**
 * Validates that a phone number is valid according to the Google libphonenumber library
 * @param phoneNumberValidationService Service to parse and validate the phone number
 * @param countryCodeControl FormControl to store the country code
 * @param defaultCountryCode Default country code to use if no country code is provided
 * @returns ValidatorFn
 */
export function phoneNumberValidator(
  phoneNumberValidationService: TauiPhonenumbersService,
  countryCodeControl?: FormControl,
  defaultCountryCode?: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const cleanedNumber =
        (control.value.trim().startsWith('+') ? '+' : '') + // Preserve '+' at the beginning
        control.value.replace(/[^0-9]+/g, '');
      const validatedPhone =
        phoneNumberValidationService.parseWithDefaultCountry(
          cleanedNumber,
          countryCodeControl?.value ? countryCodeControl.value : undefined,
          defaultCountryCode
        );
      if (validatedPhone.valid) {
        if (countryCodeControl) {
          if (validatedPhone.number?.national != control.value) {
            control.setValueAndNoValidate(validatedPhone.number?.national);
          }
          if (
            validatedPhone.countryCode &&
            validatedPhone.countryCode != countryCodeControl.value
          ) {
            countryCodeControl.setValue('+' + validatedPhone.countryCode);
          }
        } else if (validatedPhone.number?.international != control.value) {
          control.setValueAndNoValidate(validatedPhone.number?.international);
        }
      } else {
        return { phoneNumber: { value: true } };
      }
    } else {
      if (countryCodeControl) {
        countryCodeControl.setValue('', {
          emitEvent: false,
        });
      }
    }
    return null;
  };
}
