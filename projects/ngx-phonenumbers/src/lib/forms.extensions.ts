import { AbstractControl } from '@angular/forms';

declare module '@angular/forms' {
  interface AbstractControl {
    setValueAndNoValidate(value: any, options?: Object | undefined): void;
  }
}
AbstractControl.prototype.setValueAndNoValidate = function (
  value: any,
  options?: Object | undefined
): void {
  const validatorFn = this.validator;
  if (validatorFn != null) {
    this.clearValidators();
  }
  this.setValue(value, options);
  if (validatorFn != null) {
    this.addValidators(validatorFn);
  }
};
