import { Directive, Input, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { NgxPhonenumbersService } from './ngx-phonenumbers.service';

@Directive({
  selector: '[ngxPhonenumber]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NgxPhonenumbersDirective,
      multi: true,
    },
  ],
})
export class NgxPhonenumbersDirective implements Validator {
  // Services
  private readonly phoneNumberValidationService = inject(
    NgxPhonenumbersService
  );

  @Input() countryCodeControl?: FormControl;
  @Input() defaultCountryCode?: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return phoneNumberValidator(
      this.phoneNumberValidationService,
      this.countryCodeControl,
      this.defaultCountryCode
    )(control);
  }
}

/** A phone number must be a valid one */
export function phoneNumberValidator(
  phoneNumberValidationService: NgxPhonenumbersService,
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
          countryCodeControl?.value,
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
