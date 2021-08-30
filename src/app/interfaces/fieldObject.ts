import { ValidationErrors } from '@angular/forms';

type Validator = ValidationErrors | null;

export interface FieldObject {
  [key: string]: [string] | [string, Validator | Array<Validator>];
}
