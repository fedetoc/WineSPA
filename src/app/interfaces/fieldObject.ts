import { ValidationErrors, ValidatorFn } from '@angular/forms';
type Validator = ValidationErrors | null;

export interface FieldObject {
  [key: string]: [string] | [string, Validator | Array<Validator>];
}

export interface Field {
  name: keyof FieldObject;
  type: string;
  placeholder: string;
  initialValue: string;
  validations: Validator | Array<Validator>;
  customValidation?: ValidatorFn;
  plcSpace: string;
}
