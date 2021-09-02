import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validatePassword(
  control: AbstractControl
): ValidationErrors | null {
  const contraseniaF = control.get('password');
  const confirmaContraseniaF = control.get('passwordConfirm');
  return contraseniaF &&
    confirmaContraseniaF &&
    contraseniaF.value === confirmaContraseniaF.value
    ? null
    : { passwordNoCoincide: true };
}
