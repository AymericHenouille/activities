import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordsMatch(passwordFieldName: string, confirmPasswordFieldName: string): ValidatorFn {
  return (controller: AbstractControl): ValidationErrors | null => {
    const password: string = controller.get('password')?.value;
    const confirmPassword: string = controller.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMatch: true };
  };
}
