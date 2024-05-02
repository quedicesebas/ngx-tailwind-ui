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
  selector: '[ngxPhonenumbers]',
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
      const validatedPhone = phoneNumberValidationService.validate(
        control.value,
        countryCodeControl && countryCodeControl.value
          ? countryCodeControl.value
          : '',
        defaultCountryCode
      );
      if (validatedPhone.valid) {
        if (countryCodeControl) {
          if (validatedPhone.number?.national != control.value) {
            control.setValue(validatedPhone.number?.national);
          }
          if (
            validatedPhone.countryCode &&
            validatedPhone.countryCode != countryCodeControl.value
          ) {
            countryCodeControl.setValue('+' + validatedPhone.countryCode, {
              emitEvent: false,
            });
          }
        } else if (validatedPhone.number?.international != control.value) {
          control.setValue(validatedPhone.number?.international);
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
